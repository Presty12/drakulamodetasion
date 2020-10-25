
const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {
     if (!message.member.roles.has("760404936592326666"));
    let guild = "760404936592326666";
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  var msg = message;
  var üyesayısı = msg.guild.members.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
    '0': `<a:ag_0:759679893696675842>`,
    '1': `<a:ag_1:759679927548248104>`,
    '2': `<a:ag_2:759679953977081957>`,
    '3': `<a:ag_3:759679979847417897>`,
    '4': `<a:ag_4:759680002395734028> `,                      
    '5': `<a:ag_5:759680025384845312> `,
    '6': `<a:ag_6:759680049753751563>`,
    '7': `<a:ag_7:759680078312767548>`,
    '8': `<a:ag_8:759680104758247442>`,
    '9': `<a:ag_9:759680130746023987>`}[d];
      })
    }/////////////////////////////
  var sessayı = count.toString().replace(/ /g, "    ")
  var üs2 = sessayı.match(/([0-9])/g)
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
'0': `<a:ag_0:759679893696675842>`,
    '1': `<a:ag_1:759679927548248104>`,
    '2': `<a:ag_2:759679953977081957>`,
    '3': `<a:ag_3:759679979847417897>`,
    '4': `<a:ag_4:759680002395734028> `,                      
    '5': `<a:ag_5:759680025384845312> `,
    '6': `<a:ag_6:759680049753751563>`,
    '7': `<a:ag_7:759680078312767548>`,
    '8': `<a:ag_8:759680104758247442>`,
    '9': `<a:ag_9:759680130746023987>`}[d];
      })
    }
  /////////////////////////////////////////
    var bostbasansayi = message.guild.roles.get('760411558177407026').members.size.toString().replace(/ /g, "    ")
  var üs2 = bostbasansayi.match(/([0-9])/g)
  bostbasansayi = bostbasansayi.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    bostbasansayi = bostbasansayi.replace(/([0-9])/g, d => {
      return {
'0': `<a:ag_0:759679893696675842>`,
    '1': `<a:ag_1:759679927548248104>`,
    '2': `<a:ag_2:759679953977081957>`,
    '3': `<a:ag_3:759679979847417897>`,
    '4': `<a:ag_4:759680002395734028> `,                      
    '5': `<a:ag_5:759680025384845312> `,
    '6': `<a:ag_6:759680049753751563>`,
    '7': `<a:ag_7:759680078312767548>`,
    '8': `<a:ag_8:759680104758247442>`,
    '9': `<a:ag_9:759680130746023987>`}[d];
      })
    }
  /////////////////////////////////////////
  var tagdakiler = 0;
  let tag = "⼡";
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }  
  })
  var tagdakilerr = tagdakiler.toString().replace(/ /g, "    ")
  var üs3 = tagdakilerr.match(/([0-9])/g)
  tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs3) {
    tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
      return {
'0': `<a:ag_0:759679893696675842>`,
    '1': `<a:ag_1:759679927548248104>`,
    '2': `<a:ag_2:759679953977081957>`,
    '3': `<a:ag_3:759679979847417897>`,
    '4': `<a:ag_4:759680002395734028> `,                      
    '5': `<a:ag_5:759680025384845312> `,
    '6': `<a:ag_6:759680049753751563>`,
    '7': `<a:ag_7:759680078312767548>`,
    '8': `<a:ag_8:759680104758247442>`,
    '9': `<a:ag_9:759680130746023987>`}[d];
      })
    }
  //////////////////////////////////////////
  var onlayn = message.guild.members.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= onlayn.match(/([0-9])/g)
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
      return {
'0': `<a:ag_0:759679893696675842>`,
    '1': `<a:ag_1:759679927548248104>`,
    '2': `<a:ag_2:759679953977081957>`,
    '3': `<a:ag_3:759679979847417897>`,
    '4': `<a:ag_4:759680002395734028> `,                      
    '5': `<a:ag_5:759680025384845312> `,
    '6': `<a:ag_6:759680049753751563>`,
    '7': `<a:ag_7:759680078312767548>`,
    '8': `<a:ag_8:759680104758247442>`,
    '9': `<a:ag_9:759680130746023987>`}[d];
      })
    }
  ///codare farkıyla bebeğim
let emoji1 = `<a:ag_alev:760868520610496563>`;
 const embed1 = new Discord.RichEmbed()
 .setColor("GREEN")
 .setAuthor('')
 .setDescription(`${emoji1} **Sunucumuzda Toplam ** ${üyesayısı} **Üye bulunmakta.** \n\n ${emoji1} **Sunucumuzda Toplam** ${onlayn} **Çevrimiçi üye bulunmakta.** \n\n ${emoji1} **Ses kanallarında Toplam** ${sessayı} **Üye bulunmakta.** \n\n ${emoji1} **Tagımızda Toplam ** ${tagdakilerr} **Kişi bulunmakta.** \n\n ${emoji1} **Boost Basan Toplam ** ${bostbasansayi} **Kişi bulunmakta.**`)
 .setFooter(`Komutu Kullanan Üye: ${message.author.username}`)
 
     const hata = new Discord.RichEmbed()
    .setColor("GREEN")
    .setAuthor(`Hata`)
    .setDescription(`**Bu komutu kullanmaya hakkınız yoktur!**`)
 
  msg.channel.send(embed1);
 
  /*client.setInterval(() => {
  let channel = client.channels.get("694870726280347668");
  channel.setTopic(`Toplam üye: _${üyesayısı.toString()}_ / Çevrimiçi üye: ${onlayn}`); //kanal açıklama oto
}, 10000);*/
  }
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["say"],
  permLevel: 0
};
exports.help = {
  name: "say",
  description: "say",
  usage: "say"
};
   