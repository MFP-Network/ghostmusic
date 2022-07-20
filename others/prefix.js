const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

const db = require('quick.db');


module.exports = {
  name: `prefix`,
  description: `Setzt einen Serverspezifischen Prefix`,
  aliases: ["setprefix"],
  cooldown: 5,
  edesc: `Benutze den Command um einen Servereigenen Prefix festzulegen! Benutzung: ${PREFIX}prefix <NEW PREFIX>`,
 async execute(message, args, client) {

    let prefix = await db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = PREFIX;

    //react with approve emoji
    message.react("✅");

    if(!args[0]) return message.channel.send(new MessageEmbed()
    .setColor("#4B180F")
    .setTitle(`Derzeitiger Prefix: \`${prefix}\``)
    .setFooter('Bitte setze einen neuen Prefix fest')
    );
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(new MessageEmbed()
    .setColor("#4B180F")
    .setTitle(`🚫 Du darfst das nicht, Meister!`)
    );

    if(args[1]) return message.channel.send(new MessageEmbed()
    .setColor("#4B180F")
    .setTitle(`'❗Der Prefix darf nicht so lange sein'`));

    db.set(`prefix_${message.guild.id}`, args[0])

    message.channel.send(new MessageEmbed()
    .setColor("#4B180F")
    .setTitle(`✅ Erfolgreich umgesetzt auf neuen Prefix: **\`${args[0]}\`**`))
  }
}