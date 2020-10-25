const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = async (bot, message, args) => {
   const istatistikler = new Discord.RichEmbed()
  .setColor('BLACK')
  .setFooter('DRAKULA', bot.user.avatarURL)
  .addField("**Bellek Kullanımı |**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("**Üye Sayısı |**", bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("**Sunucular**", bot.guilds.size.toLocaleString(), true)
  .addField("**Ping**", bot.ping+" ms", true)
  .addField(" Botun Sahibi", "**<@737666619106394203>**")
  return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0
};

exports.help = {
  name: "bot-bilgi",
  description: "bot-bilgi",
  usage: "bot-bilgi"
};