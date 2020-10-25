  const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.sendEmbed(

     new Discord.RichEmbed()

     .addField(`Yazı Yazmalısın`)).then(m => m.delete(5000));

     console.log("oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
     message.channel.sendEmbed(

       new Discord.RichEmbed()

       .setColor("BLACK")
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
       .setFooter('DRAKULA Moderasyon', client.user.avatarURL)

       .addField(`** DRAKULA Oylama Sistemi  | Oylama Adı | **`, `**${question}**`)).then(function(message) {

         message.react('👍🏻');

         message.react('👎🏻');

       });

     };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['oylama'],

  permLevel: 2
};

exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: 'oylama <oylamaismi>'
};