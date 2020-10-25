const Discord = require('discord.js');
const client = new Discord.Client();


exports.run = (client, message, args) => {
  
  if(!message.member.roles.has('768485675598086215')) return message.channel.send('Bu komutu kullanabilmek için Presty Olmalısın')
  
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`ban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', '・drakula-chat');
  if (!modlog) return message.reply('`・drakula-chat` kanalını bulamıyorum.');
  let modlog2 = guild.channels.find('name', 'ban-bilgi');
  if (!modlog2) return message.reply('`ban-bilgi` kanalını bulamıyorum.');
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
    .setImage("https://i.hizliresim.com/0X4XGh.gif");
  return guild.channels.get(modlog.id).sendEmbed(embed);

  
    const embed2 = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTimestamp()
    .addField('**Eylem:**', '**Ban**')
    .addField('**Kullanıcı**:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('**Yetkili**:', `${message.author.username}#${message.author.discriminator}`)
    .addField('**Sebep**', reason)
    .setImage("https://i.hizliresim.com/0X4XGh.gif");
    return guild.channels.get(modlog2.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['pban'],
  permLevel: 2
};

exports.help = {
  name: 'pban',
  description: 'İstediğiniz kişiyi banlar.',
  usage: 'pban [kullanıcı] [sebep]'
};
