const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let bug = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let channel = bot.channels.get("762628806879215626")//bug repot kanal id'i
let embed = new Discord.RichEmbed()
.setTitle("Bug Bildirme")
.setThumbnail("https://cdn.discordapp.com/attachments/748103845065785404/762623160411488266/drakula_logo.png")
.addField("Bug", bug)
.addField("Raporlayan", user, true)
.setColor("RED")

message.channel.send(":white_check_mark:  **| Bug Bildirisi Başarı İle İletildi.**")
channel.send(embed)

  

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'bug-bildir',
  description: 'Bg Bildirir.',
  usage: 'bug-bildir'
}