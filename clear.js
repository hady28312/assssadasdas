const Discord = require("discord.js");
const client = new Discord.Client();
client.on("message", message => {
    var prefix = "-";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **لا يوجد لديك صلاحية لمسح الشات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم مسح الشات",
        color: 0x06DF00,
        description: "تم مسح الرسائل ",
        footer: {
          text: "©zabhm"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'زوجتي وينك') {
              message.channel.send('**زعلانة منك :(**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'ليه') {
              message.channel.send('**هيك لاتكلمني انقلع**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'احبك@WnAsHTime') {
              message.channel.send('**انقلع انت وهي يكلاب**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'زوجتي العزيزه') {
              message.channel.send('**هلا حبيبي **');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'تعالي هنا') {
              message.channel.send('**تراني هنا ما تشوف يعني؟**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'زوجتي؟؟') {
              message.channel.send('**هلا حبيبي امواح**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'من شيطون؟') {
              message.channel.send('**شيطون هو زوج بيلين ويمنع لمس شيطون لان اذا عرفت بيلين بتقوم علينا طخ طخ طخ**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'لايف') {
              message.channel.send('**لايف اميره تحاول تتزوجة ولكنه يهرب يومياً ويحاول ان يورط ياسر للزواج منها**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

     client.login('NDk2MTQyNjY4Njk1NDcwMDky.XnZL2g.PLNG9xmzwABwye2dNzKzD6NN9wU')

     