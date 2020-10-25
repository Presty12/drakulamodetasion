const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const ms = require ('ms');


const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " 7/24 AKTİF TUTMA İŞLEMİ BAŞARILI");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
  if (message.member.hasPermission("KICK_MEMBERS")) permlvl = 1;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);


client.on('message', message => {
  if (message.content === 'Drakula') {
    message.channel.send(`**${client.emojis.get("761629786840760320")} Kalitenin Adresi ${client.emojis.get("761629786840760320")}**`);
 }
});
client.on('message', message => {
  if (message.content === 'iyi geceler') {
    message.channel.send(`**İyi Geceler.**`);
 }
});

client.on('message', message => {
  if (message.content === 'günaydın') {
    message.channel.send(`**Günaydın.**`);
 }
});
client.on('message', message => {
  if (message.content === 'İyi Geceler') {
    message.channel.send(`**İyi Geceler.**`);
 }
});
client.on('message', message => {
  if (message.content === 'Günaydın') {
    message.channel.send(`**Günaydın.**`);
 }
});

//--------------------------------------------------------------------------------------------------------------------------------------------//

let ehengel = JSON.parse(
  fs.readFileSync("./ayarlar/everhereengel.json", "utf8")
);
client.on("message", async function(msg) {
  if (!msg.guild) {
  } else {
    if (!ehengel[msg.guild.id]) {
    } else {
      if (ehengel[msg.guild.id].sistem == false) {
      } else if (ehengel[msg.guild.id].sistem == true) {
        if (msg.member.roles.find("name", "⼡")) {
        } else {
          if (msg.content.includes("@everyone")) {
            msg.delete();
            msg
              .reply("<a:ag_sonsuzluk:761616152392630293> Bu Sunucuda everyone atmak yasaklanmıştır!")
              .then(msj => msj.delete(3200));
          } else {
          }
          if (msg.content.includes("@here")) {
            msg.delete();
            msg
              .reply("<a:ag_sonsuzluk:761616152392630293> Bu Sunucuda here atmak yasaklanmıştır!")
              .then(msj => msj.delete(3200));
          } else {
          }
        }
      }
    }
  }
});

//--------------------------------------------------------------------------------------------------------------------------------------------//

client.on("guildBanAdd", async(guild, user) => {
   if(guild.id !== "759431596054282297") return; //ID kısmına sunucu ID'nizi giriniz.
const banlayan = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first())
let banlayancek = guild.members.get(banlayan.exucutor.id)
if(banlayancek.bot) return;    
    
 let banlar = await db.fetch(`banlayaninbanlari_${banlayancek.id}`)    
 if(!banlar) {
   db.set(`banlayaninbanlari_${banlayancek.id}`, 1)
 return;
 }
  
let limit = "3" // 3 kısmına ban limitinin kaç olmasını istiyorsanız yazınız.
  if(banlar >= limit) {
guild.member.kick(user,{reason: "Atıldınız. (Ban limitinizi aştınız.)"})    
db.delete(`banlayaninbanlari_${banlayancek.id}`)
return;      
  } 

 db.add(`banlayaninbanlari_${banlayancek.id}`, 1)
    })
//--------------------------------------------------------------------------------------------------------------------------------------------//




client.on("guildMemberAdd", member => {

if(member.user.username.includes("❃")){
member.addRole("757210399127896155")
member.removeRole("")
member.send("**__Sunucumuzun Yasaklı Tagında Bulunuyorsunuz,Jaile Atıldınız.__**")
}
}) 

client.on("guildMemberAdd", member => {

if(member.user.username.includes("▽")){
member.addRole("757210399127896155")
member.removeRole("")
member.send("**__Sunucumuzun Yasaklı Tagında Bulunuyorsunuz,Jaile Atıldınız.__**")
}
}) 


client.on('message', async message => {
  const db = require('quick.db')
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  let kullanıcı = message.mentions.users.first() || message.author 
  let afkdkullanıcı = await db.fetch(`afk_${message.author.id}`)
  let afkkullanıcı = await db.fetch(`afk_${kullanıcı.id}`)
  let sebep = afkkullanıcı
 
  if (message.author.bot) return;
  if (message.content.includes(`${prefix}afk`)) return;
  
  if (message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(`\`${message.author.tag}\`** Adlı Kullanıcı Artık AFK Değil.**`)
      db.delete(`afk_${message.author.id}`)
    }
    if (afkkullanıcı) return message.channel.send(`${message.author}\`${kullanıcı.tag}\`** Şu Anda AFK. Sebep : \`${sebep}\` **`)
  }

  if (!message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(`\`${message.author.tag}\`** Adlı Kullanıcı Artık AFK Değil.**`)
      db.delete(`afk_${message.author.id}`)
    }
  }
});




client.on("ready", () => {
  client.channels.get("761587900688891904").join();
})



client.on("message" , async message => {
  const msg = message;
  if(message.content.startsWith(ayarlar.prefix+"afk")) return; 
  db.set(`afkSebep_${message.author.id}_${message.guild.id}`, "Sebep Girilmemiş")
  db.set(`afkKisi_${message.author.id}_${message.guild.id}`, message.author.id) 
 

  
  let afk = message.mentions.users.first()
  
  const kisi = db.fetch(`afkid_${message.author.id}_${message.guild.id}`)
  
  const isim = db.fetch(`afkAd_${message.author.id}_${message.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${message.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${message.guild.id}`)
   if(message.content.includes(kisi3)){
     const embed = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor("DRAKULA AFK" , client.user.avatarURL)
      .setDescription(`<a:ag_hayir:761624866784804924> Etiketlediğiniz Kişi Afk \n Sebep : ${sebep}`)
      .setTimestamp()
      .setFooter(`${message.author.username} `)
       message.channel.send(embed)
       
   }
 }
  if(message.author.id === kisi){
    const embed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setAuthor("DRAKULA AFK" , client.user.avatarURL)
      .setDescription(`<a:ag_sarsiyahtik:761618040361058315> Afk'lıktan Çıktınız`)
      .setTimestamp()
      .setFooter(`${message.author.username} `)
       message.channel.send(embed)
   db.delete(`afkSebep_${message.author.id}_${message.guild.id}`)
   db.delete(`afkid_${message.author.id}_${message.guild.id}`)
   db.delete(`afkAd_${message.author.id}_${message.guild.id}`)
    message.member.setNickname(isim)
      
    
  }
  
})




client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'sa') {
        msg.reply('<:ag_qiyanauwu:761625946486341734> Aleyküm Selam Hoş geldin.');      
      } 
      }
    });

client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'sea') {
        msg.reply('<:ag_qiyanauwu:761625946486341734> Aleyküm Selam Hoş geldin.');      
      } 
      }
    });


client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'selamın aleyküm') {
        msg.reply('<:ag_qiyanauwu:761625946486341734> Aleyküm Selam Hoş geldin.');      
      } 
      }
    });


client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'selamun aleyküm') {
        msg.reply('<:ag_qiyanauwu:761625946486341734> Aleyküm Selam Hoş geldin.');      
      } 
      }
    });


client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'Selam') {
        msg.reply('<:ag_qiyanauwu:761625946486341734> Aleyküm Selam Hoş geldin.');      
      } 
      }
    });



client.on("guildMemberAdd", async member => {
  let cezalan = db.get(`ceza.${member.guild.id}`);
  if (cezalan.some(cezali => member.id === cezali.slice(1))) {
    setTimeout(() => {
      member.setRoles(["759441521438097419"]);
    }, 2000);
    member.guild.channels.get('759433898681303070').send(`${member} üyesi sunucuya girdi ve Jaile atıldı!`);
    return
  };
});




// Drakula Özel Oda Sistemi --------------------------------\\
client.on('voiceStateUpdate', (oldMember, newMember) => {
    // todo create channel
    if (newMember.voiceChannel != null && newMember.voiceChannel.name.startsWith('⼡ │ Drakula Priv')) {
        newMember.guild.createChannel(`⼡ ║ ${newMember.displayName}`, {
            type: 'voice',
            parent: newMember.voiceChannel.parent
       }).then(cloneChannel => {
        newMember.setVoiceChannel(cloneChannel)
        cloneChannel.setUserLimit(2)
      })
    }
    // ! leave
    if (oldMember.voiceChannel != undefined) {
        if (oldMember.voiceChannel.name.startsWith('⼡ ║ ')) {
            if (oldMember.voiceChannel.members.size == 0) {
                oldMember.voiceChannel.delete()
            }
            else { // change name
                let matchMember = oldMember.voiceChannel.members.find(x => `⼡ ║ ${x.displayName}` == oldMember.voiceChannel.name);
                if (matchMember == null) {
                    oldMember.voiceChannel.setName(`⼡ ║ ${oldMember.voiceChannel.members.random().displayName}`)
                }
            }
        }
    }
});
//----------------------------------GEÇİCİ KANAL----------------------------// 
//----------------------------------GEÇİCİ KANAL----------------------------// 
client.on('voiceStateUpdate', (oldMember, newMember) => {
    // todo create channel
    if (newMember.voiceChannel != null && newMember.voiceChannel.name.startsWith('⼡ │ Special Of Drakula')) {
        newMember.guild.createChannel(`⼡ ║ ${newMember.displayName}`, {
            type: 'voice',
            parent: newMember.voiceChannel.parent
       }).then(cloneChannel => {
        newMember.setVoiceChannel(cloneChannel)
        cloneChannel.setUserLimit(1)
      })
    }
    // ! leave
    if (oldMember.voiceChannel != undefined) {
        if (oldMember.voiceChannel.name.startsWith('⼡ ║ ')) {
            if (oldMember.voiceChannel.members.size == 0) {
                oldMember.voiceChannel.delete()
            }
            else { // change name
                let matchMember = oldMember.voiceChannel.members.find(x => `⼡ ║ ${x.displayName}` == oldMember.voiceChannel.name);
                if (matchMember == null) {
                    oldMember.voiceChannel.setName(`⼡ ║ ${oldMember.voiceChannel.members.random().displayName}`)
                }
            }
        }
    }
});
//----------------------------------GEÇİCİ KANAL----------------------------// 

//----------------------------------Özel oda sistemi----------------------------// 
client.on('message', async message => {
  const ms = require('ms');
  const prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "özelodasistemi") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
    message.channel.send(`Özel Oda Sisteminin Kurulmasını İstiyorsanız **kur** Yazınız.`)
      message.channel.awaitMessages(response => response.content === 'kur', {
        max: 1,
        time: 10000,
        errors: ['time'],
     })
    .then((collected) => {

message.guild.createChannel('【⼡】Special Of Drakula【⼡】', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`⼡ │ Special Of Drakula`, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【⼡】Special Of Drakula【⼡】")))

            })   
      
}
});


client.on("guildMemberAdd", async member => {
        let sayac = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  let otorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
      let arole = otorole[member.guild.id].sayi
  let giriscikis = JSON.parse(fs.readFileSync("./otorol.json", "utf8")); 
  let embed = new Discord.RichEmbed()
    .setTitle('Otorol Sistemi')
    .setDescription(`:loudspeaker: :inbox_tray:  @${member.user.tag}'a Otorol Başarılıyla Verilmiştir. `)
.setColor("GREEN")
    .setFooter("ForumGrand", client.user.avatarURL);

  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(` ${member} Adlı Üyeye Unregister Rolu Verilmiştir`);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }

});

client.on("guildMemberAdd", async (member) => {
      let autorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
      let role = autorole[member.guild.id].sayi

      member.addRole(role)

});



client.on(`userUpdate`, (oldUser, newUser) => {

  let kişi = client.users.get(oldUser.id)
  let avatar = kişi.avatarURL.split('?')[0]
  let kanal = client.channels.find(ch => ch.id === '764415173653561344')
  let kanal1 = client.channels.find(ch => ch.id === '764415155677167646')
if(avatar.endsWith('.png')) {
  const emb = new Discord.RichEmbed()
  .setImage(avatar)
.setFooter("Drakula Gif", client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription(`Fotoğrafı Açmak İçin [Tıkla](${kişi.avatarURL})!`)
  kanal.send(emb)
}
if(avatar.endsWith('.gif')) {
  const emb = new Discord.RichEmbed()
  .setImage(avatar)
  .setColor("RANDOM")
  .setFooter("Drakula Gif", client.user.avatarURL)
  .setDescription(`Gifi Açmak İçin [Tıkla](${kişi.avatarURL})!`)
  kanal1.send(emb)
}
});



//Tag Alana Rol\\

client.on("userUpdate", async (oldUser, newUser) => {
  if (oldUser.username !== newUser.username) {
    let tag = "⼡"; //tagınız
    let sunucu = "759431596054282297"; //sunucu ID
    let kanal = "766425204770603048" //log kanal id
    let rol = "759433913096863764"; // rol ID
    if (newUser.username.includes(tag) && !client.guilds.get(sunucu).members.get(newUser.id).roles.has(rol)) {
      client.channels.get(kanal).send(`${newUser} ${tag} tagını aldığı için <@&${rol}> rolünü kazandı!`)
      client.guilds.get(sunucu).members.get(newUser.id).addRole(rol)
    } if (!newUser.username.includes(tag) && client.guilds.get(sunucu).members.get(newUser.id).roles.has(rol)) {
      client.guilds.get(sunucu).members.get(newUser.id).removeRole(rol)
      client.channels.get(kanal).send(`${newUser} ${tag} tagını çıkardığı için <@&${rol}> rolünü kaybetti!`)
    }

  }
})

//........MESAJ ISTATISTIK........//

client.on("message", async message => {
  if (message.author.bot === false) {
    await db.add(`puan_${message.guild.id}_${message.author.id}`, 1); //MESAJ BAŞINA VERİLECEK PUAN ÜYE  

    await db.add(`puanc_${message.guild.id}_${message.channel.id}`, 1); //MESAJ BAŞINA VERİLECEK PUAN KANAL   

    await db.add(`puanuc_${message.author.id}_${message.channel.id}`, 1); //EN COK MESAJ ATILAN KANAL UYE  
  }
});

//........SES ISTATISTIK........//

client.on("voiceStateUpdate", async (oldMember, newMember) => {
  if (!oldMember.user.bot) {
    let oldChannel = oldMember.voiceChannel; 

    let newChannel = newMember.voiceChannel; 

    if (oldChannel === undefined && newChannel !== undefined) {
      db.set(`girisses.${oldMember.user.id}.${oldMember.guild.id}`, Date.now());
    } else if (newChannel === undefined) {
      let ilksessüre = await db.fetch(
        `girisses.${oldMember.user.id}.${oldMember.guild.id}`
      ); 

      let time = Date.now() - ilksessüre;
      await db.add(
        "voicei_" + oldMember.guild.id + "_" + oldMember.user.id,
        time
      ); 

      await db.add(
        "voicec_" + oldMember.guild.id + "_" + oldMember.voiceChannelID,
        time
      ); 

      await db.add(
        "voiceuc_" + oldMember.user.id + "_" + oldMember.voiceChannelID,

        time 
      ); 
    }
  } 
}); 



//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\

client.on('guildMemberAdd', async(member) => {
let rol = member.guild.roles.find(r => r.name === "⼡ | JAIL");
let cezalımı = db.fetch(`cezali_${member.guild.id + member.id}`)
let sürejail = db.fetch(`süreJail_${member.id + member.guild.id}`)
if (!cezalımı) return;
if (cezalımı == "cezali") {
member.addRole(rol.id)
 
member.send("Cezalıyken Sunucudan Çıktığın için Yeniden Mutelendin!")
 setTimeout(function(){
    // msg.channel.send(`<@${user.id}> Muten açıldı.`)
db.delete(`cezali_${member.guild.id + member.id}`)
    member.send(`<@${member.id}> Cezan açıldı.`)
    member.removeRole(rol.id);
  }, ms(sürejail));
}
})


client.on('guildMemberAdd', async(member) => {
let mute = member.guild.roles.find(r => r.name === "⼡ | HOENIR");
let mutelimi = db.fetch(`muteli_${member.guild.id + member.id}`)
let süre = db.fetch(`süre_${member.id + member.guild.id}`)
if (!mutelimi) return;
if (mutelimi == "muteli") {
member.addRole(mute.id)
 
member.send("Muteliyken Sunucudan Çıktığın için Yeniden Mutelendin!")
 setTimeout(function(){
    // msg.channel.send(`<@${user.id}> Muten açıldı.`)
db.delete(`muteli_${member.guild.id + member.id}`)
    member.send(`<@${member.id}> Muten açıldı.`)
    member.removeRole(mute.id);
  }, ms(süre));
}
})



client.on('voiceStateUpdate', async (oldMember, newMember) => {
if(oldMember.voiceChannel == undefined) {
let oldUser = oldMember.user;
let newUser = newMember.user;
const data = require('quick.db')
if(await data.fetch(`kaldır.${oldUser.id}.${oldMember.guild.id}`)) {
let author = oldMember.guild.members.get(await data.fetch(`kaldır.${oldUser.id}.${oldMember.guild.id}`))
data.delete(`kaldır.${oldUser.id}.${oldMember.guild.id}`)
newMember.setMute(false)
client.channels.get('763434386133352508').send(new Discord.RichEmbed().setColor('#494459').setAuthor(author.user.tag, author.user.avatarURL).setDescription(`${oldMember} üyesinin ses susturulması, ${author} tarafından kaldırıldı.`))
} }
})// 

client.on('voiceStateUpdate', async (oldMember, newMember) => {
let oldUser = oldMember.user;
let newUser = newMember.user;
const data = require('quick.db')
const ms = require('ms')
const moment = require('moment')

if(oldMember.voiceChannel == undefined) {

let sistem;
if(await data.fetch(`atılamadı.${oldUser.id}.${oldMember.guild.id}.atılma`)) { sistem = 'açık' } else if(await data.fetch(`atılamadı.${oldUser.id}.${oldMember.guild.id}.bitiş`)) { sistem = 'açık' }
if(sistem === 'açık') {
  
  const atan1 = await data.fetch(`atılamadı.${oldUser.id}.${oldMember.guild.id}.atan1`)
  const atan2 = await data.fetch(`atılamadı.${oldUser.id}.${oldMember.guild.id}.atan2`)
  const süre = await data.fetch(`atılamadı.${oldUser.id}.${oldMember.guild.id}.süre`)
  const sebep = await data.fetch(`atılamadı.${oldUser.id}.${oldMember.guild.id}.sebep`)
  const timereplace = await data.fetch(`atılamadı.${oldUser.id}.${oldMember.guild.id}.timereplace`)
  
  var tarih = new Date(Date.now())
  var tarih2 = ms(timereplace)
  var tarih3 = Date.now() + tarih2 + 10800000

  let atılmaay = moment(Date.now()+10800000).format("MM")
  let atılmagün = moment(Date.now()+10800000).format("DD")
  let atılmasaat = moment(Date.now()+10800000).format("HH:mm:ss")
  let bitişay = moment(tarih3).format("MM")
  let bitişgün = moment(tarih3).format("DD")
  let bitişsaat = moment(tarih3).format("HH:mm:ss")
  let muteatılma = `\`${atılmagün} ${atılmaay.replace(/01/, 'Ocak').replace(/02/, 'Şubat').replace(/03/, 'Mart').replace(/04/, 'Nisan').replace(/05/, 'Mayıs').replace(/06/, 'Haziran').replace(/07/, 'Temmuz').replace(/08/, 'Ağustos').replace(/09/, 'Eylül').replace(/10/, 'Ekim').replace(/11/, 'Kasım').replace(/12/, 'Aralık')} ${atılmasaat}\``
  let mutebitiş = `\`${bitişgün} ${bitişay.replace(/01/, 'Ocak').replace(/02/, 'Şubat').replace(/03/, 'Mart').replace(/04/, 'Nisan').replace(/05/, 'Mayıs').replace(/06/, 'Haziran').replace(/07/, 'Temmuz').replace(/08/, 'Ağustos').replace(/09/, 'Eylül').replace(/10/, 'Ekim').replace(/11/, 'Kasım').replace(/12/, 'Aralık')} ${bitişsaat}\``
 
  newMember.setMute(true)
  client.channels.get('763434386133352508').send(new Discord.RichEmbed().setColor('RED').setAuthor(atan1, atan2).setDescription(`${oldMember} (\`${oldUser.id}\`) üyesi ses kanallarında susturuldu.

• Mute Atılma: ${muteatılma}
• Mute Bitiş: ${mutebitiş}
• Süre: \`${süre}\`

• Sebep: \`${sebep}\`
`))

      setTimeout(() => {
    if(newMember.voiceChannel == undefined) {
  client.channels.get('763434386133352508').send(new Discord.RichEmbed().setColor('RED').setAuthor(atan1, atan2).setDescription(`${oldMember} (\`${newUser.id}\`) üyesi susturulması biteceği süre içinde sesli kanallarda bulunmadığı için süresi sıfırlandı, bir kanala girerse tekrar başlayacak.

• Süre: \`${süre}\`
• Sebep: \`${sebep}\`
`))
  } else if(newMember.voiceChannel) {
  data.delete(`seslide2.${newMember.user.id}.${newMember.guild.id}`)
  newMember.setMute(false)
  client.channels.get('763434386133352508').send(new Discord.RichEmbed().setColor('GREEN').setAuthor(atan1, atan2).setDescription(`${newMember} (\`${newUser.id}\`) üyesinin ses kanallarında bulunan susturulması kaldırıldı.

• Mute Atılma: ${muteatılma}
• Mute Bitiş: ${mutebitiş}
• Süre: \`${süre}\`

• Sebep: \`${sebep}\`
`)) 

 data.delete(`atılamadı.${oldUser.id}.${oldMember.guild.id}.atan1`) 
 data.delete(`atılamadı.${oldUser.id}.${oldMember.guild.id}.atan2`) 
 data.delete(`atılamadı.${oldUser.id}.${oldMember.guild.id}.süre`) 
 data.delete(`atılamadı.${oldUser.id}.${oldMember.guild.id}.sebep`) 
 data.delete(`atılamadı.${oldUser.id}.${oldMember.guild.id}.timereplace`) 
 data.delete(`atılamadı.${oldUser.id}.${oldMember.guild.id}.atılma`) 
 data.delete(`atılamadı.${oldUser.id}.${oldMember.guild.id}.bitiş`) 
  }

  }, ms(timereplace))
  

} else if(await data.fetch(`kaldırılamadı.${oldUser.id}.${oldMember.guild.id}.atılma`) && await data.fetch(`kaldırılamadı.${oldUser.id}.${oldMember.guild.id}.bitiş`)) {
    const atan1 = await data.fetch(`atılamadı.${oldUser.id}.${oldMember.guild.id}.atan1`)
  const atan2 = await data.fetch(`atılamadı.${oldUser.id}.${oldMember.guild.id}.atan2`)
  const süre = await data.fetch(`atılamadı.${oldUser.id}.${oldMember.guild.id}.süre`)
  const sebep = await data.fetch(`atılamadı.${oldUser.id}.${oldMember.guild.id}.sebep`)
    const muteatılma = await data.fetch(`kaldırılamadı.${oldUser.id}.${oldMember.guild.id}.atılma`)
      const mutebitiş = await data.fetch(`kaldırılamadı.${oldUser.id}.${oldMember.guild.id}.bitiş`)
    data.delete(`seslide2.${newMember.user.id}.${newMember.guild.id}`)
  newMember.setMute(false)
  client.channels.get('763434386133352508').send(new Discord.RichEmbed().setColor('GREEN').setAuthor(atan1, atan2).setDescription(`${newMember} (\`${newUser.id}\`) üyesinin ses kanallarında bulunan susturulması kaldırıldı.

• Mute Atılma: ${muteatılma}
• Mute Bitiş: ${mutebitiş}
• Süre: \`${süre}\`

• Sebep: \`${sebep}\`
`)) 
   data.delete(`atılamadı.${oldUser.id}.${oldMember.guild.id}.atan1`) 
 data.delete(`atılamadı.${oldUser.id}.${oldMember.guild.id}.atan2`) 
 data.delete(`atılamadı.${oldUser.id}.${oldMember.guild.id}.süre`) 
 data.delete(`atılamadı.${oldUser.id}.${oldMember.guild.id}.sebep`) 
 data.delete(`atılamadı.${oldUser.id}.${oldMember.guild.id}.timereplace`) 
 data.delete(`atılamadı.${oldUser.id}.${oldMember.guild.id}.atılma`) 
 data.delete(`atılamadı.${oldUser.id}.${oldMember.guild.id}.bitiş`) 
  data.delete(`kaldırılamadı.${oldUser.id}.${oldMember.guild.id}.atılma`)
  data.delete(`kaldırılamadı.${oldUser.id}.${oldMember.guild.id}.bitiş`)
}
}
})// 



