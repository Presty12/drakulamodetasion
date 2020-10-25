const Discord = require('discord.js');
const SahibinID = '737666619106394203'
exports.run = (client, message, args) => {
    if (message.author.id !== SahibinID) return message.channel.send("Bu komutu sadece sahibim kullabilir.");
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0x2488E7)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Dostum ne yapıyorsun?', 'Ben bir botum, beni sunucunda dene lütfen.')
    return message.author.sendEmbed(ozelmesajuyari); }
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Bir şey yazmalısın.');
  message.delete();
  console.log(`Duyuru <a:ag_duyuru:761625614658043934>: "${message.author.username}#${message.author.discriminator}" "${mesaj}" <a:ag_duyuru:761625614658043934>`);
  
      client.users.forEach(u => {
u.send(mesaj)
})
message.channel.send(`✅ Mesaj **` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** tane kullanıcıya gonderildi.`);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dmduyuru'],
  permLevel: 0
};
exports.help = {
  description: 'Mesajınızı botun bulunduğu sunucudaki insanlara duyurur.',
  name: 'dmduyuru',
  usage: 'dmduyuru [mesaj]'
};
