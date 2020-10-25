const Discord = require("discord.js")
const db = require('quick.db');
exports.run = async(client, message, args) => {    
 if(!message.member.roles.some(r => ["760404934628868118" , "760404936592326666"].includes(r.id))) // ROL (KAYITÇI, VEYA Bİ ROL İDSİ) İDLERİ ÇOĞALTA BİLİRSİNİZ.
    return message.reply("Bu Komutu Kullanmak İçin Yeterli Yetkin Bulunmamakta !")
  //------------------------------------------------KAYITLAR-----------------------------------------------\\    STG   
 let adam = message.mentions.users.first()
if(!adam) {
  let cezapuan = db.fetch(`cezaPuan.${message.author.id}`);
  let jailsorgu = db.fetch(`jailSorgu.${message.author.id}`);
  let mutesorgu = db.fetch(`muteSorgu.${message.author.id}`);
  let voiceMute = db.fetch(`voiceMute.${message.author.id}`);
  let voicePuan = db.fetch(`voicePuan.${message.author.id}`);

  if(cezapuan === null) cezapuan = "0" 
  if(cezapuan === undefined) cezapuan = "0" 
  if(jailsorgu === null) jailsorgu = "0"
  if(jailsorgu === undefined) jailsorgu = "0"
  if(mutesorgu === null) mutesorgu = "0"
  if(mutesorgu === undefined) mutesorgu = "0"
  if(voiceMute === null) voiceMute = "0"
  if(voiceMute === undefined) voiceMute = "0"
  const kaytlar = new Discord.RichEmbed()
 .setThumbnail(message.author.avatarURL)     
    .setTitle(`${message.author.username|| message.mentions.members.first}`) 
    .setDescription(`• Jaila Girme Sayısı: \`${jailsorgu}\`
• Mutelenme Sayısı: \`${mutesorgu}\`
• Voice Mute Sayısı: \`${voiceMute}\`
• Toplam Ceza Puanın: \`${cezapuan}\`

`)
    .setFooter(`Drakula Sicil`)
    .setColor("0x2f3136")
  return message.channel.send(kaytlar)
};
if(adam) {
 let cezapuan2 = await db.fetch(`cezaPuan.${adam.id}`) 
 let jailsorgu2 = await db.fetch(`jailSorgu.${adam.id}`)
 let mutesorgu2 = db.fetch(`muteSorgu.${adam.id}`); 
 let voiceMute = db.fetch(`voiceMute.${adam.id}`)
 let voicePuan = db.fetch(`voicePuan.${adam.id}`);
  if(cezapuan2 === null) cezapuan2 = "0" 
  if(cezapuan2 === undefined) cezapuan2 = "0" 
  if(jailsorgu2 === null) jailsorgu2 = "0"    
  if(jailsorgu2 === undefined) jailsorgu2 = "0"
  if(mutesorgu2 === null) mutesorgu2 = "0"
  if(mutesorgu2 === undefined) mutesorgu2 = "0"
  if(voiceMute === null) voiceMute = "0"
  if(voiceMute === undefined) voiceMute = "0"
  const kaytlar2 = new Discord.RichEmbed()
 .setThumbnail(adam.avatarURL)     
    .setTitle(`${adam.username}`) 
    .setDescription(`• Jaila Girme Sayısı:  \`${jailsorgu2}\`
• Mutelenme Sayısı:  \`${mutesorgu2}\`
• Voice Mute Sayısı: \`${voiceMute}\`
• Toplam Ceza Puanları: \`${cezapuan2}\`

`)
    .setFooter(`Drakula Sicil`)
    .setColor("0x2f3136")
  return message.channel.send(kaytlar2)
}}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sicil', 'cv'],
  permLevel: 0,
  kategori: ``
};

exports.help = {
  name: 'sicil',
  description: '',
  usage: ''
};