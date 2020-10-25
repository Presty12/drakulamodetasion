const Discord = require('discord.js');
const client = new Discord.Client();


exports.run = (client, message, args) => {
  
   if(!message.member.roles.some(r => ["760404934628868118" , "759441120077152296"].includes(r.id))) 
    return message.reply("Bu Komutu Kullanmak İçin Yeterli Yetkin Bulunmamakta !")
  
  let kişi = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', '・drakula-chat');
  if (!modlog) return message.reply('`・drakula-chat` kanalını bulamıyorum.');
  if (reason.length < 1) return message.reply('Ban sebebini yazmalısın.');
  if (message.mentions.users.size < 1) return message.reply('Kimi banlayacağını yazmalısın.').catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply('Yetkilileri banlayamam.');
  message.guild.ban(user, 2);

  const embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTimestamp()
    .addField('**Eylem:**', '**Ban**')
    .addField('**Kullanıcı**:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('**Yetkili**:', `${message.author.username}#${message.author.discriminator}`)
    .addField('**Sebep**', reason)
    .setImage("https://i.hizliresim.com/BDULNv.gif");
  return guild.channels.get(modlog.id).sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi banlar.',
  usage: 'ban [kullanıcı] [sebep]'
};
