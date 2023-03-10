import Router from 'koa-router';
// import Shopify, { SessionInterface } from '@shopify/shopify-api';

// import { ShopService } from 'services'
import logger from '@utils/logger';
// import { BoosterEntity } from '@services/booster/booster.entity';
import { BoosterService } from 'services/booster/booster.service';
import { BoosterContent, BoosterDesign, BoosterEntity } from '@services/booster/booster.entity';

const router = new Router();

//done
router.get('/boosters/:id', async (ctx) => {
  try {
    const id = ctx.params.id;

    const getBooster = await BoosterService.getBoosterById(id);

    ctx.body = getBooster;
    console.log(ctx.body + ': id');
  } catch (error) {
    logger.error(`Error get boosters by id : ${error.stack}`);
    ctx.res.statusCode = 500;
  }
});

//done
router.get('/boosters', async (ctx) => {
  try {
    const boosterResult = await BoosterService.getAllBooster();
    ctx.body = boosterResult;
    console.log(ctx.body);
  } catch (error) {
    logger.error(`Error get boosters: ${error.stack}`);
    ctx.res.statusCode = 500;
  }
});

//done
router.post('/boosters', async (ctx) => {
  try {
    const {
      id,
      boosterName,
      status,
      goal,
      message,
      progressMessage,
      goalMessage,
      position,
      template,
      backgroundColor,
      font,
      messageSize,
      messageColor,
    } = ctx.request.body;

    const newBooster = new BoosterEntity();
    const newContent = new BoosterContent();
    const newDesign = new BoosterDesign();
    newBooster.id = id;
    newBooster.boosterName = boosterName;
    newBooster.status = status;
    newContent.goals = goal;
    newContent.message = message;
    newContent.progressMessage = progressMessage;
    newContent.goalMessage = goalMessage;
    newDesign.position = position;
    newDesign.template = template;
    newDesign.backgroundColor = backgroundColor;
    newDesign.font = font;
    newDesign.messageSize = messageSize;
    newDesign.messageColor = messageColor;

    newBooster.content = newContent;
    newBooster.design = newDesign;

    const result = await BoosterService.createBooster(newBooster);

    ctx.body = result;

    console.log(result + ' created successfully');
  } catch (error) {
    logger.error(`Error createBooster: ${error.stack}`);
    ctx.res.statusCode = 500;
  }
});

//delete id ch??a xong
router.delete('/boosters/:id', async (ctx) => {
  try {
    const boosterId = ctx.params.id;

    const result = await BoosterService.deleteBooster(boosterId);
    if (result) {
      ctx.body = { success: true };
      console.log('Delete Susscessfully');
    } else {
      ctx.status = 404;
      ctx.body = { success: false, message: `No booster found with ID ${boosterId}` };
    }
  } catch (error) {
    logger.error(`Error deleting booster: ${error.stack}`);
    ctx.status = 500;
    ctx.body = { success: false, message: 'An error occurred while deleting the booster' };
  }
});

router.put('/boosters/:id', async (ctx) => {
  const id = ctx.params.id;
  const { boosterName, status } = ctx.request.body; // extract boosterName property
  const boosterToUpdate = await BoosterService.getBoosterById(id);

  if (!boosterToUpdate) {
    ctx.status = 404;
    ctx.body = { message: `Booster with ID ${id} not found` };
    return;
  }

  boosterToUpdate.boosterName = boosterName; // update boosterName property
  boosterToUpdate.status = status; // update status property
  await BoosterService.updateBooster(boosterToUpdate);

  console.log(`${boosterToUpdate} Update success`);

  ctx.body = { message: `Booster with ID ${id} updated successfully` };
});

export default router;
