const Discord = require('discord.js');
exports.run = function (client, message, args) {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Yeterli Yetkin Yok.");
  if (!args[0]) return message.channel.send("Silinecek mesajın miktarını yaz!");
  message.delete()
  message.react('760538134743744612')
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`• **${args[0]} adet mesaj başarıyla silindi!**`)
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 1
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};