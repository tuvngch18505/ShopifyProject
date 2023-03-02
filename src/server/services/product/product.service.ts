import { getManager } from 'typeorm';
import { ProductEntity } from './product.entity';

export const ProductService = {
  async getProduct(id: string) {
    try {
      return getManager().getMongoRepository(ProductEntity).findOne({ id });
    } catch (error) {
      return false;
    }
  },
  async getAllProduct() {
    try {
      return getManager().getMongoRepository(ProductEntity).find();
    } catch (error) {
      return false;
    }
  },
  async getProductsBySearch(param: Object) {
    try {
      return await getManager().getMongoRepository(ProductEntity).findAndCount(param);
    } catch (error) {
      return false;
    }
  },
  async getSettings(keys: string[]) {
    try {
      const result = {
        region: [],
        style: [],
        format: [],
        size: [],
        pricePerBtl: [],
      };
      for (let key of keys) {
        Object.assign(result, {
          [key]: await getManager().getMongoRepository(ProductEntity).distinct(key, {}),
        });
      }
      return result;
    } catch (error) {
      return false;
    }
  },
  async updateProduct(data: Omit<ProductEntity, '_id'>) {
    try {
      return getManager()
        .getMongoRepository(ProductEntity)
        .updateOne({ id: data.id }, { $set: data }, { upsert: true });
    } catch (error) {
      return false;
    }
  },
  async deleteProduct(productId: string) {
    try {
      const result = await getManager()
        .getMongoRepository(ProductEntity)
        .findOne({ where: { 'variants.productId': productId } });
      if (result.id && result.variants.length > 1) {
        delete result._id;
        result.variants.splice(
          result.variants.findIndex((v) => v.productId == productId),
          1,
        );
        return getManager()
          .getMongoRepository(ProductEntity)
          .updateOne({ id: result.id }, { $set: result }, { upsert: false });
      } else {
        return getManager().getMongoRepository(ProductEntity).deleteOne({ id: result.id });
      }
    } catch (error) {
      return false;
    }
  },
};
