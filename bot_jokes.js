const { Telegaf, Telegraf } = require('telegraf')
const token = '1657753595:AAHanfIdeA3Zu6vnvO75J88zi-VOeF3SMQI';
const bot = new Telegraf(token)



const jokes = ['Почему в мультфильме "Маша и Медведь" не показывают родителей Маши?- Они, наверное, уже в дурдоме!', 
               'Коврик у двери, на нем вышито: "Представь, что я твой начальник"', 
               '- Официант, в вине я нашел седой волос! - Не удивительно, ведь вину 200 лет'];

bot.command('giveJoke', (ctx) => {
    const jokeIndex = Math.floor(Math.random() * jokes.length);
    const joke = jokes[jokeIndex];
    ctx.reply(joke);
});
bot.launch()


// const photos = ['https://unsplash.com/photos/SYx3UCHZJlo',
//                       'https://unsplash.com/photos/UljbyG2UcVI',
//                       'https://unsplash.com/photos/7XAM0J3dNQM',
//                       'https://unsplash.com/photos/okVXy9tG3KY'] ;

// bot.command('replyWithPhoto', (ctx)=> {
//     const photoIndex = Math.floor(Math.random() * photos.length);
//     const photo = photos [photoIndex];
//     ctx.replyWithPhoto(photo);
// });
// bot.launch()


