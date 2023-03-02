import Router from 'koa-router';
import { ProductService } from 'services';
import logger from '@utils/logger';
import { ResultProductsSearch } from 'types';
import { ProductEntity, ProductVariant } from '@services/product/product.entity';

const router = new Router({
  prefix: '/online-store',
});

enum ParamFields {
  wine = 'wine',
  vintage = 'vintage',
  region = 'region',
  type = 'type',
  packing = 'packing',
  bottleSize = 'bottleSize',
  minimumPoints = 'minimumPoints',
  priceMin = 'priceMin',
  priceMax = 'priceMax',
  collections = 'collections',
  sort = 'sort',
  page = 'page',
}

enum SettingFields {
  region = 'region',
  type = 'style',
  packing = 'format',
  bottleSize = 'size',
  pricePerBtl = 'price_per_btl',
}

const params = [
  ParamFields.wine,
  ParamFields.vintage,
  ParamFields.region,
  ParamFields.type,
  ParamFields.packing,
  ParamFields.bottleSize,
  ParamFields.minimumPoints,
  ParamFields.priceMin,
  ParamFields.priceMax,
  ParamFields.collections,
  ParamFields.sort,
  ParamFields.page,
];

interface SettingsData {
  region: string[];
  type: string[];
  packing: string[];
  bottleSize: string[];
  priceMax: number;
  minimumPoints: number[];
}

interface VariantInCart {
  variantId: string;
  quantity: number;
}

const escapeSpecialCharacters = (paramValue: string | string[]) => {
  return (paramValue as string).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const sortVariantsById = (variants: ProductVariant[], id: string) => {
  return variants.sort((variantObj1, variantObj2) => {
    const idVariant1 = variantObj1[id];
    const idVariant2 = variantObj2[id];
    return idVariant1 < idVariant2 ? -1 : idVariant1 > idVariant2 ? 1 : 0;
  });
};

const getQtyVariants = (
  sortedVariants: ProductVariant[],
  orderedQty: number,
  variantsInCart: VariantInCart[],
) => {
  let resultQtyVariants: ProductVariant[] = [];
  for (let variant of sortedVariants) {
    let variantQty = variant.quantity;
    if (variantsInCart.length) {
      const variantMatching = variantsInCart.filter((value) => {
        if (value.variantId === variant.variantId) {
          return true;
        } else {
          return false;
        }
      });
      if (variantMatching.length) {
        variantQty = variantQty - variantMatching[0].quantity;
      }
    }
    orderedQty -= variantQty;
    if (variantQty > 0) {
      if (orderedQty > 0) {
        variant.quantity = variantQty;
        resultQtyVariants.push(variant);
      } else {
        variant.quantity = orderedQty + variantQty;
        resultQtyVariants.push(variant);
        break;
      }
    }
  }
  return resultQtyVariants;
};

router.get('/products', async (ctx) => {
  try {
    const optionsOrConditions = { where: { 'variants.quantity': { $gt: 0 } }, order: {} };
    const conditionWhere = optionsOrConditions.where;
    const conditionOrder = optionsOrConditions.order;
    for (let param of params) {
      const paramValue = ctx.query[param];
      if (paramValue) {
        switch (param) {
          case ParamFields.wine:
            Object.assign(conditionWhere, {
              name: { $regex: escapeSpecialCharacters(paramValue), $options: 'i' },
            });
            break;
          case ParamFields.vintage:
            Object.assign(conditionWhere, {
              vintage: { $regex: escapeSpecialCharacters(paramValue), $options: 'i' },
            });
            break;
          case ParamFields.region:
            Object.assign(conditionWhere, { region: paramValue });
            break;
          case ParamFields.type:
            Object.assign(conditionWhere, { style: paramValue });
            break;
          case ParamFields.packing:
            Object.assign(conditionWhere, { format: paramValue });
            break;
          case ParamFields.bottleSize:
            Object.assign(conditionWhere, { size: +paramValue });
            break;
          case ParamFields.minimumPoints:
            Object.assign(conditionWhere, {
              $or: [
                { ratingWsMin: { $lte: +paramValue }, ratingWsMax: { $gte: +paramValue } },
                { ratingWaMin: { $lte: +paramValue }, ratingWaMax: { $gte: +paramValue } },
              ],
            });
            break;
          case ParamFields.priceMin:
            conditionWhere['price_per_btl']
              ? Object.assign(conditionWhere['price_per_btl'], { $gte: +paramValue })
              : Object.assign(conditionWhere, { price_per_btl: { $gte: +paramValue } });
            break;
          case ParamFields.priceMax:
            conditionWhere['price_per_btl']
              ? Object.assign(conditionWhere['price_per_btl'], { $lte: +paramValue })
              : Object.assign(conditionWhere, { price_per_btl: { $lte: +paramValue } });
            break;
          case ParamFields.collections:
            Object.assign(conditionWhere, { collections: paramValue });
            break;
          case ParamFields.sort:
            switch (paramValue) {
              case 'a-z':
                Object.assign(conditionOrder, { lowerName: 'ASC' });
                break;
              case 'z-a':
                Object.assign(conditionOrder, { lowerName: 'DESC' });
                break;
              case 'low-high':
                Object.assign(conditionOrder, { price_per_btl: 'ASC' });
                break;
              case 'high-low':
                Object.assign(conditionOrder, { price_per_btl: 'DESC' });
                break;
            }
            break;
          case ParamFields.page:
            const pageSize = ctx.query.pageSize ? +ctx.query.pageSize : 20;
            const skip = (+paramValue - 1) * pageSize;
            Object.assign(optionsOrConditions, { skip, take: pageSize });
            break;
          default:
            return null;
        }
      }
    }
    Object.assign(optionsOrConditions.order, { vintage: 'ASC' });
    const resultProductsSearch = await ProductService.getProductsBySearch(optionsOrConditions);
    if (resultProductsSearch) {
      const productsData = resultProductsSearch[0];
      for (let product of productsData) {
        let availability = 0;
        const variants = product?.variants || [];
        for (let variant of variants) {
          const variantQty = variant?.quantity || 0;
          availability += variantQty;
        }
        product.availability = availability;
      }
      const resultGetProductsData: ResultProductsSearch = {
        data: productsData,
        totalResult: resultProductsSearch[0],
      };
      ctx.body = resultGetProductsData;
    } else {
      ctx.body = null;
    }
  } catch (error) {
    logger.error(`error get products  =====> ${error.stack}`);
    ctx.res.statusCode = 500;
  }
});

router.post('/add-to-cart', async (ctx) => {
  try {
    const productId = ctx.query.id;
    const orderedQty = +ctx.query.quantity;
    const cartData = ctx.request.body;
    const resultProductsSearch = await ProductService.getProductsBySearch({
      where: { id: productId },
    });
    let variantsInCart: VariantInCart[] = [];
    if (productId && orderedQty > 0 && resultProductsSearch) {
      const productsData = resultProductsSearch[0];
      const variants = productsData[0]?.variants || [];
      const sortedVariants = sortVariantsById(variants, 'id');
      if (cartData?.items?.length) {
        variantsInCart = cartData.items.map((value) => {
          return {
            variantId: value.variant_id,
            quantity: value.quantity,
          };
        });
      }
      const resultQtyVariants = getQtyVariants(sortedVariants, orderedQty, variantsInCart);
      ctx.body = resultQtyVariants;
    } else {
      ctx.body = [];
    }
  } catch (error) {
    logger.error(`error add to cart  =====> ${error.stack}`);
    ctx.res.statusCode = 500;
  }
});

router.get('/settings', async (ctx) => {
  try {
    const settingsData = await ProductService.getSettings([
      SettingFields.region,
      SettingFields.type,
      SettingFields.packing,
      SettingFields.bottleSize,
      SettingFields.pricePerBtl,
    ]);
    if (settingsData) {
      const minPoints = [...Array(11)].map((_, zero) => zero + 90);
      const priceList = settingsData[SettingFields.pricePerBtl];
      const priceMax = Math.max(...priceList);
      const settingsDataResponse: SettingsData = {
        region: settingsData.region as string[],
        type: settingsData.style as string[],
        packing: settingsData.format as string[],
        bottleSize: settingsData.size as string[],
        priceMax: priceMax as number,
        minimumPoints: minPoints,
      };
      ctx.body = settingsDataResponse;
    } else {
      ctx.body = null;
    }
  } catch (error) {
    logger.error(`error get settings  =====> ${error.stack}`);
    ctx.res.statusCode = 500;
  }
});

router.get('/products-to-download', async (ctx) => {
  try {
    const optionsOrConditions = { where: { 'variants.quantity': { $gt: 0 } }, order: {} };
    const conditionWhere = optionsOrConditions.where;
    const conditionOrder = optionsOrConditions.order;
    for (let param of params) {
      const paramValue = ctx.query[param];
      if (paramValue) {
        switch (param) {
          case ParamFields.wine:
            Object.assign(conditionWhere, {
              name: { $regex: escapeSpecialCharacters(paramValue), $options: 'i' },
            });
            break;
          case ParamFields.vintage:
            Object.assign(conditionWhere, {
              vintage: { $regex: escapeSpecialCharacters(paramValue), $options: 'i' },
            });
            break;
          case ParamFields.region:
            Object.assign(conditionWhere, { region: paramValue });
            break;
          case ParamFields.type:
            Object.assign(conditionWhere, { style: paramValue });
            break;
          case ParamFields.packing:
            Object.assign(conditionWhere, { format: paramValue });
            break;
          case ParamFields.bottleSize:
            Object.assign(conditionWhere, { size: +paramValue });
            break;
          case ParamFields.minimumPoints:
            Object.assign(conditionWhere, {
              $or: [
                { ratingWsMin: { $lte: +paramValue }, ratingWsMax: { $gte: +paramValue } },
                { ratingWaMin: { $lte: +paramValue }, ratingWaMax: { $gte: +paramValue } },
              ],
            });
            break;
          case ParamFields.priceMin:
            conditionWhere['price_per_btl']
              ? Object.assign(conditionWhere['price_per_btl'], { $gte: +paramValue })
              : Object.assign(conditionWhere, { price_per_btl: { $gte: +paramValue } });
            break;
          case ParamFields.priceMax:
            conditionWhere['price_per_btl']
              ? Object.assign(conditionWhere['price_per_btl'], { $lte: +paramValue })
              : Object.assign(conditionWhere, { price_per_btl: { $lte: +paramValue } });
            break;
          case ParamFields.collections:
            Object.assign(conditionWhere, { collections: paramValue });
            break;
          case ParamFields.sort:
            switch (paramValue) {
              case 'a-z':
                Object.assign(conditionOrder, { lowerName: 'ASC' });
                break;
              case 'z-a':
                Object.assign(conditionOrder, { lowerName: 'DESC' });
                break;
              case 'low-high':
                Object.assign(conditionOrder, { price_per_btl: 'ASC' });
                break;
              case 'high-low':
                Object.assign(conditionOrder, { price_per_btl: 'DESC' });
                break;
            }
            break;
          default:
            return null;
        }
      }
    }
    Object.assign(optionsOrConditions.order, { vintage: 'ASC' });
    const resultProductsSearch = await ProductService.getProductsBySearch(optionsOrConditions);
    if (resultProductsSearch) {
      const productsData: ProductEntity[] = resultProductsSearch[0];
      for (let product of productsData) {
        let availability = 0;
        const variants = product?.variants || [];
        for (let variant of variants) {
          const variantQty = variant?.quantity || 0;
          availability += variantQty;
        }
        product.availability = availability;
      }
      ctx.body = productsData;
    } else {
      ctx.body = [];
    }
  } catch (error) {
    logger.error(`error get products-to-download  =====> ${error.stack}`);
    ctx.body = [];
  }
});

export default router;
