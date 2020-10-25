const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");


exports.run = (client, msg) => {
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
    msg.channel.sendCode("Drakula", `⇝ Tum Komutlar
[1] moderasyon :: Moderasyon komutlarını gösterir.
[2] kullanıcı :: Kullanıcı komutlarını gösterir.
[3] yeni :: Yeni Eklenen komutları gösterir.


# örn: !!yardım moderasyon
`);
};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komutlar'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'komutlar',
    description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
    usage: 'komutlar'
  };