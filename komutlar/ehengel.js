const Discord = require("discord.js");
const fs = require('fs');
exports.run = (client, msg, args) => {
   if(!msg.member.roles.has("760404934628868118")) {
    msg.reply("Bu Komutu Kullanmak İçin Yeterli Yetkin Yok!")
  } else {
    if(!args[0]) {
      msg.reply("<a:ag_unlem:760448332677120040> Lütfen `aç` veya `kapat` Yazınız. <a:ag_unlem:760448332677120040>")
    } else {
      if(!["aç", "kapat"].includes(args[0])) {
        msg.reply("<a:ag_unlem:760448332677120040> Lütfen sadece `aç` veya `kapat` Yazınız. <a:ag_unlem:760448332677120040>")
      } else {
        if(args[0] == "aç") {
          try {
            let dosya = JSON.parse(fs.readFileSync('./ayarlar/everhereengel.json', 'utf8'));
            dosya[msg.guild.id] = {
              sistem: true
            }
            fs.writeFile('./ayarlar/everhereengel.json', JSON.stringify(dosya), (err) => {
              if(err) throw err;
            })
            msg.reply("Sistem Başarılı Bir Şekilde Açıldı <a:ag_tik3:761622314210951198>");
          } catch (e) {
            console.log(e);
          }
        } else if(args[0] == "kapat") {
          try {
            let dosya = JSON.parse(fs.readFileSync('./ayarlar/everhereengel.json', 'utf8'));
            dosya[msg.guild.id] = {
              sistem: false
            }
            fs.writeFile('./ayarlar/everhereengel.json', JSON.stringify(dosya), (err) => {
              if(err) throw err;
            })
            msg.reply("Sistem Başarılı Bir Şekilde Kapatıldı <a:ag_tik:759682240035684353>");
          } catch (e) {
            console.log(e);
          }
        }
      }
    }
  }
}//lrowsxrd
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["eh-engel"],
  permLevel: 0
};
exports.help = {
  name: "ehengel",
  description: "ferzah",
  usage: ""
};