# Hamsa Shopify app base

The repository is built as a standard code structure and common patterns for shopify app with [Koajs](https://koajs.com/)

## Requirements

- Mongodb
- Redis
- Nodejs 14.x

## Coding Standards

1.  Tool: [Prettier CLI](https://prettier.io/docs/en/cli.html) and [Prettier extension for VS code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
2.  All code conventions are configurated in the `.prettierrc` and `.eslintrc.js` file
3.  Use `yarn` instead of `npm`
4.  Make sure you ran `yarn lint` to autoformat code before commit

## Git worklow

[Git workflow at Hamsa](https://docs.google.com/document/d/1OMO0t51fXTO-C3OjHtanMXP7APo-37aaaOtyfnTn8Nk/edit)

## Environment Configuration

When deploy Default Address App, below config var needed to be added to process environment:

| var name               | var description                                                                                    | example                                                   |
| ---------------------- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| SHOPIFY_API_KEY        | Shopify API key, generated by shopify, taken from App setup page in Shopify partner account        | 958d65e859f31ea0748764XXXXXXXXXX                          |
| SHOPIFY_API_SECRET     | Shopify API secret key, generated by shopify, taken from App setup page in Shopify partner account | shpss_e734783691f1beb4459693XXXXXXXXXX                    |
| HOST                   | Root uri of the App https://default-address.herokuapp.com                                          | https://default-address.herokuapp.com                     |
| SCOPES                 | Permissions of the App to the store which install the App                                          | write_customers,write_orders,write_script_tags            |
| APP_NAME               | Name of the App. This one will be displayed in log files by bunyan logger                          | Default Address App                                       |
| NODE_ENV               | Node environment                                                                                   | production                                                |
| PORT                   | Port to run the App                                                                                | 3000                                                      |
| DB_URL                 | URI of the main database                                                                           | mongodb+srv://test:test@cluster0.ts192.mongodb.net/test   |
| REDIS_HOST             | REDIS database host                                                                                | redis-17207.c292.ap-southeast-1-1.ec2.cloud.redislabs.com |
| REDIS_PORT             | REDIS port                                                                                         | 17207                                                     |
| QUEUE_MONITOR_USER     | User used to login queue monitor                                                                   | admin                                                     |
| QUEUE_MONITOR_PASSWORD | Password used to login queue monitor                                                               | admin                                                     |

## Development

1.  Create `.env` file at root folder , config all required enviroment variables
2.  `yarn install`
3.  `yarn dev`
"# free-shiping-project" 
