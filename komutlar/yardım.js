const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  if(args[0] === "moderasyon"){
    let moderasyon = [`
    ●▬▬▬▬▬▬▬▬▬▬▬●
    **${prefix}ban: Kullanıcıyı Sunucudan Yasaklar.**
    **${prefix}aban: Kullanıcıyı Sunucudan Yasaklar.(AREX'E ÖZEL)**
    **${prefix}pban: Kullanıcıyı Sunucudan Yasaklar.(PRESTY'E ÖZEL)**
    **${prefix}ban-bilgi: Kullanıcının Ban Durumunu Gösterir.**    
    **${prefix}bot-bilgi: Botun Bilgilerini Gösterir.**
    **${prefix}mute: Etiketlenen Kullanıcıyı Chatte Susturur.**
    **${prefix}duyuru: Duyuru Yapar.**
    **${prefix}cv: Kullanıcının CVsini Gösterir**    
    **${prefix}jail: Etiketlenen Kullanıcıyı Jaile atar.**
    **${prefix}kick: Kullanıcıyı Sunucudan Atar.**
    **${prefix}kanal-kilit: Kanalı İstenilen Süre Boyunca Kilitler.**
    **${prefix}komutlar: Botta Bulunan Komutları Gösterir.**
    **${prefix}oylama: Oylama Başlatır.**
    **${prefix}reboot: Botu Yeniden Başlatır.**
    **${prefix}sa-as aç/kapat: Sa Yazıldığında As Yazmasını Açarsınız/Kapatırsınız.**
    **${prefix}say: Sunucudaki Kişi Sayısını, Tagdaki Kişi Sayısını, Çevrimiçim Kişi Sayısını, Ses Kanallarındaki Kişi Sayısını ve Boost Basan Kişi Sayısını Gösterir.**
    **${prefix}sunucubilgi: Sunucunun Bilgilerini Gösterir.**
    **${prefix}tagsay tag: Belirttiğiniz Tagdaki Kullanıcı Sayısını Gösterir.**
    **${prefix}temizle miktar: İstenilen Miktarda Mesaj Siler. (Sınır 100'dür)**
    **${prefix}unban: Kullanıcının Banını Kaldırır.**    
    **${prefix}unmute: Kullanıcının Mutesini Kaldırır.**
    **${prefix}unjail: Kullanıcının Jailini Kaldırır.**
    **${prefix}unvmute: Kullanıcının Ses Mutesini Kaldırır.**    
    **${prefix}otorol: Otorol Ayarlarsınız.**
    **${prefix}vmute: Kullanıcıyı Seste Susturur.**
    **${prefix}özelodasistemi: Özel Oda Kurarsınız. (Bu Kodu Sadece Yönetici Yetkisine Sahip Kişiler Kullanabilir!!)**
    ●▬▬▬▬▬▬▬▬▬▬▬●
`]
    const moderasyonE = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle("Drakula Moderasyon Kategorisi")
    .setThumbnail("https://cdn.discordapp.com/attachments/748103845065785404/762623160411488266/drakula_logo.png")
    .setDescription(moderasyon)
    .addField("Linkler", "[Drakula Sınırsız Davet Linki](https://discord.gg/drakula)")
    .setTimestamp()
    .setFooter(message.author.tag + " Tarafından kullanıldı", message.author.avatarURL);
    message.channel.send(moderasyonE)
    return
    
  } else {
    var arg = args[0]
  }
  if(!args[0]) {var arg = args[0]}
  
  if(!args[0]) {var arg = args[0]}
  //MODERASYON BİTİŞ

  
  
  if(args[0] === "kullanıcı"){
    let kullanıcı = [`
    ●▬▬▬▬▬▬▬▬▬▬▬●
    **${prefix}afk: Afk Moduna Geçersiniz.**
    **${prefix}avatar: Kendinizin Veya Bir Başkasının Avatarını Gösterir.**
    **${prefix}bug-bildir: Bug Bildirirsiniz.**
    **${prefix}havadurumu: Yazdığıınız İlin Havadurumuna Bakarsınız.**
    **${prefix}ping: Kullanıcının Ve Botun Pingini Gösterir.**
    **${prefix}döviz: Güncel Döviz Kurlarını Gösterir.**  
    **${prefix}info: Ses-Chat Aktifliğinizi Gösterir.** 
    **${prefix}top: Toplam Ses-Chat Aktifliğini Gösterir.**  
    ●▬▬▬▬▬▬▬▬▬▬▬●
`]
    
    
    const kullanıcıE = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle("Drakula Kullanıcı Kategorisi")
    .setThumbnail("https://cdn.discordapp.com/attachments/748103845065785404/762623160411488266/drakula_logo.png")
    .setDescription(kullanıcı)
    .addField("Linkler", "[Drakula Sınırsız Davet Linki](https://discord.gg/drakula)")
    .setTimestamp()
    .setFooter(message.author.tag + " Tarafından Kullanıldı", message.author.avatarURL);
    message.channel.send(kullanıcıE)
    return
    
  } else {
    var arg = args[0]
  }
  if(!args[0]) {var arg = args[0]}
  
  if(!args[0]) {var arg = args[0]}
  
    
  if(args[0] === "yeni"){
    let yeni = [`
    ●▬▬▬▬▬▬▬▬▬▬▬●
    **${prefix}info: Ses-Chat Aktifliğinizi Gösterir.** 
    **${prefix}top: Toplam Ses-Chat Aktifliğini Gösterir.**  
    ●▬▬▬▬▬▬▬▬▬▬▬●
`]
    
    
    const yeniE = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle("Yeni Eklenen Komutlar")
    .setThumbnail("https://cdn.discordapp.com/attachments/748103845065785404/762623160411488266/drakula_logo.png")
    .setDescription(yeni)
    .addField("Linkler", "[Drakula Sınırsız Davet Linki](https://discord.gg/drakula)")
    .setTimestamp()
    .setFooter(message.author.tag + " Tarafından Kullanıldı", message.author.avatarURL);
    message.channel.send(yeniE)
    return
    
  } else {
    var arg = args[0]
  }
  if(!args[0]) {var arg = args[0]}
  
  if(!args[0]) {var arg = args[0]} 
  
  
  
  
  
  const kategoriliyardım = new Discord.RichEmbed()
  .setTitle("Drakula Moderasyon")
  .setColor("RED")
  .setDescription("Örnek komut kullanımı; `!!yardım moderasyon`\n Prefix: `!!`")
  .addField("**Moderasyon Komutları**", `${prefix}yardım moderasyon: Moderasyon Komutlarını gösterir.`)  
  .addField("**Kullanıcı Komutları**", `${prefix}yardım kullanıcı: Kullanıcı Komutlarını gösterir.`)
  .addField("**Yeni Eklenen Komutlar**", `${prefix}yardım yeni: Yeni Komutları Gösterir.`)
  .setThumbnail("https://cdn.discordapp.com/attachments/748103845065785404/762623160411488266/drakula_logo.png")
  .addField("Linkler", "[Drakula Sınırsız Davet Linki](https://discord.gg/drakula)")
  .setTimestamp()
  .setFooter(message.author.tag + " Tarafından Kullanıldı", message.author.avatarURL);
  message.channel.send(kategoriliyardım);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y", "help", "h"],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: 'Drakula Yardım Menüsü',
  usage: 'yardım <kategori>'
};