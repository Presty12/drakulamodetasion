const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {
  if(!message.member.roles.some(r => ["760404934628868118" , "759441120077152296"].includes(r.id)))
  return message.reply("Bu komudu kulanmak için yeterli yetkiye sahip değilsin!") 

 
let unbanid = args[0]
if(!unbanid) return message.reply("Banını kaldırmak istediğin kişinin id sini yazmalısın.")

const unbanlog = message.guild.channels.find(unban => unban.id === "763430424978128916");

  
message.guild.unban(unbanid)
message.channel.send(`<@${unbanid}>, Adlı Kullanıcının Banı Kaldırıldı.`).then(msg => msg.delete(5000))
 

  
const unban = new Discord.RichEmbed()
.setColor('BLACK')
.setThumbnail(message.author.avatarURL)  
.setDescription(`**• Drakula Moderasyon  \n\n• Banı Kaldıran Yetkili :`+ message.member +`\n• Banı Kaldırılan Kullanıcı : <@${unbanid}>**`)
.setTimestamp()
.setImage('https://media2.giphy.com/media/P4bLhbzfxDaM0/giphy.gif?cid=790b7611927a1206a32a987fa98e88a78b2a26dcabe41fd6&rid=giphy.gif')
.setFooter('Drakula Unban')
unbanlog.send(unban)

  

};
exports.conf = {
enabled:true,
guildOnly: true,
aliases: ["unban"],
permlevel: 2
};
exports.help = {
name: "unban",
description: "Herhangi bir kullanıcının banını açarsınız.",
usage: "unban kullanıcı"
};