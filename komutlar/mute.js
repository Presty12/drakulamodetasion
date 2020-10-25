const Discord = require("discord.js");
const ms = require("ms");
const db = require("quick.db");
const moment = require('moment')
const ayarlar = require('../ayarlar.json')
var muteli = "759465336981422140"; //buraya muteli rolünün id'sini koyunuz
exports.run = async (client, message, args) => {
  
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\    
  
   if(!message.member.roles.some(r => ["760404934628868118" , "759441520234856518"].includes(r.id))) // ROL (KAYITÇI, VEYA Bİ ROL İDSİ) İDLERİ ÇOĞALTA BİLİRSİNİZ.
    return message.reply("Bu Komutu Kullanmak İçin Yeterli Yetkin Bulunmamakta !")
  
  let kişi = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\    

  
  
  
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\  
  
  
  
  
  db.add(`cezaPuan.${kişi.id}`, 5)
  
  let cezapuan = db.fetch(`cezaPuan.${kişi.id}`);
  
  db.add(`muteSorgu.${kişi.id}`, 1)
  
  let mutesorgu = db.fetch(`muteSorgu.${kişi.id}`);  
  
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\  
  


  
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\    
        
          let log = message.guild.channels.find(c => c.id.toLowerCase().includes("763434386133352508")); //  LOG
          let savelog = message.guild.channels.find(c => c.id.toLowerCase().includes("767844806746832906")); //  LOG
                               
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\    
  
    let muted =message.mentions.members.first() || message.guild.members.find(c => c.id === args[0]);
    if (!muted) return message.channel.send("Lütfen susturulacak üyeyi etiketleyiniz.");
    else {
      if (muted.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition
      ) 
         return message.channel.send("Bu kullanıcı senden daha üst pozisyonda.");
       else {
        let mutezaman = args[1]
          .replace("sn", "s")
          .replace("dk", "m")
          .replace("sa", "h")
          .replace("gün", "d");
        if (!mutezaman) {
           return message.channel.send("Bir zaman girmediniz!");
        } else {
          let sebep = args[2]
          if(!args[2]) return message.channel.send(`Bir Sebep Belirtmelisin.`)

            
          let vakit = mutezaman
            .replace("m", " dakika")
            .replace("s", " saniye")
            .replace("h", " saat")
            .replace("d", " d");
          
db.set(`muteli_${message.guild.id + kişi.id}`, 'muteli')
db.set(`süre_${message.mentions.users.first().id + message.guild.id}`, mutezaman)


//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\ 
          
          try {
            log.send(
              new Discord.RichEmbed()
              .setAuthor(message.author.username, message.author.avatarURL)
                .setColor(`GREEN`)
                .setDescription(`<@${kişi.id}> (\`${kişi.id}\`) üye metin kanallarında susturuldu.

• Mute Süresi: \`${mutezaman}\`
• Sebep: \`${sebep}\``)
                .setFooter("Drakula Mute")
            );
            muted.addRole(muteli);
           message.channel.send(
            new Discord.RichEmbed()
             .setAuthor(`SUSTURULDU`)
             .setColor('0x2f3136')
             .setDescription(`**<@${muted.user.id}>** Kullanıcısı, **<@${message.author.id}>** Tarafından Chat Mutesi Atıldı **${mutezaman}** Zamanı Boyunca <@&${muteli}> Verildi.`)

            ).then(msg => msg.delete(5000));
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\ 

                 const sadxstriga = new Discord.RichEmbed()
           .setAuthor(message.author.username, message.author.avatarURL)
                .setColor(`GREEN`)
                .setDescription(`<@${kişi.id}> (\`${kişi.id}\`) üyesi metin kanallarında susturuldu.

• Mute Süresi: \`${mutezaman}\`
• Sebep: \`${sebep}\``)
                .setTimestamp()
                .setFooter("Drakula Mute")
                 savelog.send(sadxstriga)
                 
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\ 
          } catch (e) {
            console.log(e);
          }

          setTimeout(async function() {
            muted.removeRole(
              muteli,
              log.send(
              new Discord.RichEmbed()
              .setColor('#494459')
              .setDescription(`<@${kişi.id}> (\`${kişi.id}\`) üyesinin metin kanallarında susturulması sonlandı.

• Mute Süresi: \`${mutezaman}\`
• Sebep: \`${sebep}\``)
              .setFooter("Drakula Mute"))
              
            );
          }, ms(mutezaman));
        }
      }
    }
  }



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mute"],
  permLevel: 0
};

exports.help = {
  name: "mute",
  description: "mute",
  usage: "mute"
};