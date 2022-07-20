const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `uptime`,
  description: `Zeigt die Uptime des Bots`,
  aliases: [],
  cooldown: 5,
  edesc: "Mit diesem Befehl siehst du wie lange der Bot nicht gestoppt war",
  execute(message, args, client) {
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    //react with approve emoji
    message.react("✅");
    return message.channel.send(new MessageEmbed().setColor("#4B180F").setTitle(`***Bot ist schon wach seit:***\n\n\`${days} Tagen\` \`${hours} Stunden\` \`${minutes} Minuten\` \`${seconds} Sekunden\n\``));


  }
}