import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
// import { verifyRequest } from '@shopify/koa-shopify-auth';
import boosterRouter from './booster'
import proxyRouter from './proxy';


const router = new Router({
  prefix: '/api',
});

// router.use(
//   verifyRequest({
//     accessMode: 'offline',
//     returnHeader: true,
//   }),
// );
router.use(bodyParser());

router.use(proxyRouter.routes()).use(proxyRouter.allowedMethods());
router.use(boosterRouter.routes()).use(boosterRouter.allowedMethods());

export default router;
