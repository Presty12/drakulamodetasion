const Discord = require('discord.js');
const math = require('math-expression-evaluator')
const stripIndents = require('common-tags').stripIndents

exports.run = function(client, message, args) {
    var soru = args.join(' ');
    
    if(!soru) return message.reply('Bir işlem belirtin. Doğru Kullanım: !!hesapla <işlem>')
    else { let cevap;
        try {
            cevap = math.eval(soru)
        } catch(err) {
            message.channel.send('Hatalı işlem: **' + err)
        }

        const embed = new Discord.RichEmbed()
        .setTitle('Matematik Hesaplaması')
        .setThumbnail('https://cdn.discordapp.com/attachments/715539763507232799/762730523314749450/a_70b4bebcd468443ea0d6205e111fe8c2.gif')
        .addField('Soru', soru)
        .addField('Cevap', cevap)

        message.channel.send(embed)
    }

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'hesapla', 
  description: 'Belirtilen işlemi yapar.',
  usage: 'hesapla <işlem>'
};