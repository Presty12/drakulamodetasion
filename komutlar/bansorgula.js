const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
exports.run = async (client, message, args) => {

  
  if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('Bu komutu kullanabilmek için `Üyeleri Yasakla` iznine sahip olmalısın!');
  let mamy = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if(!args[0] || isNaN(args[0])) return message.reply(`Geçerli bir ban yemiş kullanıcı ID'si belirtmelisin! => \`${mamy}ban bilgi id\``)
  
  let user = args[0]
  
    
  try {
    message.guild.fetchBan(args.slice(0).join(' '))
    .then(({ user, reason }) => message.channel.send(
      new Discord.RichEmbed()
      .setAuthor(user.tag, user.avatarURL)
      .setColor('BLACK')
      .addField('Banlanan Kullanıcı', `${user.tag} \`(${user.id})\``)
      .setDescription(`**Ban Sebebi:** ${reason}`)))
      .setFooter('Drakula Ban Sorgulama')
  } catch(err) {}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['banbilgi', 'bansorgula'],
  permLevel: 0
};

exports.help = {
  name: 'ban-bilgi',
  description: "IDsi girilen kullanıcının ban bilgilerini gösterir.",
  usage: 'ban-bilgi <id>',
  kategori: 'yetkili'
};