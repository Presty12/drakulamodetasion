const Discord = require("discord.js");
const ms = require("ms");
const db = require("quick.db");
const ayarlar = require('../ayarlar.json')
var muteli = "759465336981422140"; //buraya muteli rolünün id'sini koyunuz
exports.run = async (client, message, args) => {
  
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆ＹＥＴＫＩ◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\ 
  
   if(!message.member.roles.some(r => ["760404934628868118" , "759441520234856518"].includes(r.id))) // ROL (KAYITÇI, VEYA Bİ ROL İDSİ) İDLERİ ÇOĞALTA BİLİRSİNİZ.
    return message.reply("Bu Komutu Kullanmak İçin Yeterli Yetkin Bulunmamakta !")
  
  let kişi = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));  
  
  
    let muted =message.mentions.members.first() || message.guild.members.find(c => c.id === args[0]);
    if (!muted) { message.reply("Lütfen susturulacak üyeyi etiketleyiniz.");
   } else {
      if (muted.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition
      ) {
        message.reply("Bu kullanıcı senden daha üst pozisyonda.");
      } else {

         let sebep = args[1]
          if(!args[1]) return message.channel.send(`Bir Sebep Belirtmelisin.`)
        
        
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆ＬＯＧ ＡＹＡＲＬＡＭＡ◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\

          let log = message.guild.channels.find(c => c.id.toLowerCase().includes("763434386133352508")); //  LOG
          let savelog = message.guild.channels.find(c => c.id.toLowerCase().includes("767844806746832906")); //  LOG

        
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆ＭＥＴＩＮＬＥＲ◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\ 
        
            log.send(
              new Discord.RichEmbed()
              .setAuthor(message.author.username, message.author.avatarURL)
                .setColor(`PURPLE`)
                .setDescription(`• <@${muted.id}> <@${message.author.id}> Tarafından \`${sebep}\` Sebebiyle Chat Mutesi Kaldırıldı.`)
                .setTimestamp()
                .setFooter("Drakula Unmute")
            );
            muted.removeRole(muteli);
            message.channel.send(
              `**${muted.user.tag}** Kullanıcısının **${message.author.tag}** Tarafından Chat Mutesi Kaldırıldı.`
            );
        
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆ＥＸＴＲＡ ＬＯＧ◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\ 

                 const sadxstriga = new Discord.RichEmbed()
           .setAuthor(message.author.username, message.author.avatarURL)
                .setColor(`PURPLE`)
                .setDescription(`• Yetkili: <@${message.author.id}> (\`${message.author.id}\`)
• Mutesi Kalkan: <@${muted.id}> (\`${muted.id}\`)
• Sebep: \`${sebep}\` 
• Kanal: \`${message.channel.name}\`
`)
                .setTimestamp()
                .setFooter("Drakula Unmute")
                 savelog.send(sadxstriga)
        }
      }
    }




exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["umute"],
  permLevel: 0
};

exports.help = {
  name: "unmute",
  description: "mute",
  usage: ""
};