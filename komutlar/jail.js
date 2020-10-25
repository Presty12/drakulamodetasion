const Discord = require("discord.js");
const ms = require("ms");
const db = require("quick.db");
const ayarlar = require('../ayarlar.json');
const moment = require('moment')
const prefix = ayarlar.prefix;
module.exports.run = async (client, message, args) => {

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\  
          
if(!message.member.roles.some(r => ["760404934628868118", "759441520880255036"].includes(r.id))) // ROL (KAYITÇI, VEYA Bİ ROL İDSİ) İDLERİ ÇOĞALTA BİLİRSİNİZ.
return message.reply("Bu Komutu Kullanmak İçin Yeterli Yetkin Bulunmamakta !")
  
  
  let kişi = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kişi) return message.channel.send(`Jail'a Atılacak Üyeyi Etiketleyin`)
  if(kişi.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu Kişi Yetkili, Jail'a Atamam`)
  
  const rol = message.guild.roles.find(c => c.id === "759441521438097419");

  const log = message.guild.channels.find(c => c.id === "767448268543098900"); // 
  const extra = message.guild.channels.find(c => c.id === "767844143347007509"); //
  
    let zaman1 = args[1]
          .replace("sn", "s")
          .replace("dk", "m")
          .replace("sa", "h")
          .replace("gün", "d");
        if (!zaman1)
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\   
  
  
 var vakit = zaman1
            .replace("m", " dakika")
            .replace("s", " saniye")
            .replace("h", " saat")
            .replace("d", " d");
  

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\
  db.set(`cezali_${message.guild.id + kişi.id}`, 'cezali')

  db.set(`süreJail_${message.mentions.users.first().id + message.guild.id}`, zaman1)


  db.add(`cezaPuan.${kişi.id}`, 15)
  
  let cezapuan = db.fetch(`cezaPuan.${kişi.id}`);
  
  db.add(`jailSorgu.${kişi.id}`, 1)
  
  let jailsorgu = db.fetch(`jailSorgu.${kişi.id}`);  
  
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\  
  
  let zaman = args[1]
  if(!args[1]) return message.channel.send(`Ne kadar süre jailde duracağını belirtmelisin.\nÖrnek: ${prefix}jail kişi süre sebep`)

let sebep = args.join(``).slice(args[1].length+args[0].length)
if(!sebep) return message.reply("Sebep Belirtmelisin !")
  
  const strigay = new Discord.RichEmbed()
  .setColor(`GREEN`)
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`<@${kişi.id}> (\`${kişi.id}\`) üyesinin sunucuda cezası sonlandı.

• Yetkili: <@${message.author.id}> (\`${message.author.id}\`)
• Jail Süresi: \`${zaman1}\`
• Yetkili: \`${message.channel.name}\`

• Sebep: \`${sebep}\``)

  .setFooter(`Ceza Puanı Toplam: ${cezapuan} Oldu`)
  
  const mamygay = new Discord.RichEmbed()
  .setColor('#494459')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`<@${kişi.id}> (\`${kişi.id}\`) üyesinin sunucuda cezası sonlandı.

• Yetkili: <@${message.author.id}> (\`${message.author.id}\`)
• Jail Süresi: \`${zaman1}\`
• Yetkili: \`${message.channel.name}\`

• Sebep: \`${sebep}\``)
  
  const jailsave = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
 .setDescription(`• Yetkili: <@${message.author.id}> | \`${message.author.id}\`
• Cezalı: <@${kişi.id}> | \`${kişi.id}\`
• Sebep : \`${sebep}\`
• Süre : \`${zaman1}\`
• Kullanılan Kanal: \`${message.channel.name}\`
• Ceza Puanı: \`${cezapuan}\`
`)
  .setFooter("Drakula Jail")
  .setTimestamp()
extra.send(jailsave)  
 
  //━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\  
  
  kişi.addRole(rol.id);
    kişi.roles.forEach(r => {
kişi.removeRole(r.id)
db.set(`${message.guild.id}.jail.${kişi.id}.roles.${r.id}`, r.id )})
    log.send(strigay)
    message.channel.send(
            new Discord.RichEmbed()
             .setAuthor(`Jaile Atıldı`)
             .setColor('0x2f3136')
             .setDescription(`**${kişi}** Kullanıcısı, **<@${message.author.id}>** Tarafından Jail'a Atıldı **${zaman1}** Zamanı Boyunca ${rol} Verildi.`)

            ).then(msg => msg.delete(5000));
    setTimeout(async () =>{
    kişi.removeRole(rol.id)
    log.send(mamygay)
  }, ms(zaman));
            setTimeout(async () =>{
message.guild.roles.forEach(async r => {
const i = await db.fetch(`${message.guild.id}.jail.${kişi.id}.roles.${r.id}` )
if(i != r.id)  return ;
if(i){kişi.addRole(i)}
db.delete(`${message.guild.id}.jail.${kişi.id}.roles.${r.id}`)
})
              }, ms(zaman));
}

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yargı'],
    permLevel: 0
  };
  
exports.help = {
 name: 'jail',
 description: '',
 usage: '',
 kategori: '',
 permLvl: ''
};