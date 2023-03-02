import Router from 'koa-router'
// import Shopify, { SessionInterface } from '@shopify/shopify-api';

// import { ShopService } from 'services'
import logger from '@utils/logger';
// import { BoosterEntity } from '@services/booster/booster.entity';
import {
    BoosterService,
} from 'services/booster/booster.service'
import { BoosterEntity } from '@services/booster/booster.entity';


const router = new Router();

router.get('/getBoosterById/:id', async (ctx) => {
    try {
        const id = ctx.params.id;

        const getBooster = await BoosterService.getBoosterById(id);

        ctx.body = getBooster;
        console.log(ctx.body + ": id");

    } catch (error) {
        logger.error(`Error get boosters by id : ${error.stack}`);
        ctx.res.statusCode = 500;
    }
});

router.get('/getBooster', async (ctx) => {
    try {
        const boosterResult = await BoosterService.getAllBooster();
        ctx.body = boosterResult;
        console.log(ctx.body)

    } catch (error) {
        logger.error(`Error get boosters: ${error.stack}`);
        ctx.res.statusCode = 500;
    }

});

router.post('/createBooster', async (ctx) => {
    try {
        const { id, boosterName } = ctx.request.body;

        const newBooster = new BoosterEntity();
        newBooster.id = id;
        newBooster.boosterName = boosterName;

        const result = await BoosterService.createBooster(newBooster);

        ctx.body = result;

        console.log(result + " created successfully");

    } catch (error) {
        logger.error(`Error createBooster: ${error.stack}`);
        ctx.res.statusCode = 500;
    }
});



//delete id chưa xong
router.delete('/boosters/:id', async (ctx) => {
    try {
        const boosterId = ctx.params.id;


        const result = await BoosterService.deleteBooster(boosterId);
        if (result) {
            ctx.body = { success: true };
            console.log("Delete Susscessfully")
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



router.put('/boosters/update/:id', async (ctx) => {
    const id = ctx.params.id;
    const newBoosterName = ctx.request.body.newBoosterName;
    const boosterToUpdate = await BoosterService.getBoosterById(id);

    if (!boosterToUpdate) {
        ctx.status = 404;
        ctx.body = { message: `Booster with ID ${id} not found` };
        return;
    }

    boosterToUpdate.boosterName = newBoosterName;
    await BoosterService.updateBooster(boosterToUpdate);

    console.log(boosterToUpdate + "Updadte success");

    ctx.body = { message: `Booster with ID ${id} updated successfully` };


})


export default router;