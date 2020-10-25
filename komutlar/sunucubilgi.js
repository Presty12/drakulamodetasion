const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`sunucubilgi` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('<a:ag_alev:760868520610496563> Sunucu Adı:', message.guild.name)
    .addField('<a:ag_alev:760868520610496563> Sunucu ID:', message.guild.id)
    .addField('<a:ag_alev:760868520610496563> Ana kanal:', '**drakula-chat**')
    .addField('<a:ag_alev:760868520610496563> Sunucu Bölgesi:', message.guild.region)
    .addField('<a:ag_alev:760868520610496563> Üye sayısı:', message.guild.memberCount)
    .addField('<a:ag_alev:760868520610496563> Sahibi:', message.guild.owner + ' (' + message.guild.ownerID + ')')
    .addField('<a:ag_alev:760868520610496563> Kanal sayısı:', message.guild.channels.size)
    .addField('<a:ag_alev:760868520610496563> Oluşturulma tarihi:', message.guild.createdAt)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu', 'sunucu bilgi', 'sbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'sunucubilgi'
};
