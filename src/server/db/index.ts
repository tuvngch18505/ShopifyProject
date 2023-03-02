import { createConnection } from 'typeorm';
import { config } from '@utils/config';
import { ShopsEntity } from '@services/shop/shop.entity';
import { SessionsEntity } from '@services/session/session.entity';
import logger from '@utils/logger';
import { BoosterEntity } from '@services/booster/booster.entity';
import { ProductEntity } from '@services/product/product.entity';

export const connectDatabase = async (): Promise<boolean> => {
  try {
    await createConnection({
      type: config.DB_TYPE,
      host: config.DB_HOST,
      port: config.DB_PORT,
      username: config.DB_USERNAME,
      password: config.DB_PASSWORD,
      database: config.DB_DATABASE_NAME,
      entities: [ShopsEntity, SessionsEntity, BoosterEntity, ProductEntity],
      url: config.DB_URL,
      useUnifiedTopology: true,
    });

    logger.info('database connected');

    return true;
  } catch (e) {
    logger.error('unable to connect database');
    return false;
  }
};
