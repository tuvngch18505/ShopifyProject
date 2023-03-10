import { getManager } from 'typeorm';
import { BoosterEntity } from './booster.entity';

export const BoosterService = {
  //getBooster according to name
  async getBoosterById(id: string) {
    try {
      return getManager().getMongoRepository(BoosterEntity).findOne({ id });
    } catch {
      return false;
    }
  },

  //get booster in moongoose
  async getAllBooster() {
    try {
      return getManager().getMongoRepository(BoosterEntity).find();
    } catch (error) {
      return false;
    }
  },

  //using fetch to client to server

  //create Booster
  async createBooster(data: BoosterEntity) {
    try {
      return getManager().getMongoRepository(BoosterEntity).save(data);
    } catch (error) {
      return false;
    }
  },

  //update Booster
  async updateBooster(data: Omit<BoosterEntity, '_id'>) {
    try {
      return getManager()
        .getMongoRepository(BoosterEntity)
        .updateOne({ id: data.id }, { $set: data }, { upsert: true });
    } catch (error) {
      return false;
    }
  },

  //delete booster
  async deleteBooster(id: string) {
    try {
      await getManager().getMongoRepository(BoosterEntity).deleteOne({ id });
      return true;
    } catch (error) {
      return false;
    }
  },
};
