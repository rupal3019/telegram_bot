const {Telegraf} = require('telegraf'); // all the telegram server info is present here in this package
const axios  = require('axios')  // to connect to some url

const bot = new Telegraf('6634935945:AAGWkMLsyByF6Wa8Mo-BdrBckH3KVIBt6ss');

bot.start((ctx) => ctx.reply('Welcome to our coding bot'));

// bot.command('duplicates', async function(ctx){
//     const response = await axios.get('');
//     console.log(response.data);
//     return ctx.reply(response.data);
// })

bot.on('sticker',(ctx) => ctx.reply('🖕🏻'));

bot.launch();