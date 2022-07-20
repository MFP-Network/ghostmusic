const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `ping`,
  description: `Pinge den Bot an für die Latenz`,
  aliases: ["latency"],
  cooldown: 2,
  edesc: "Benutze den Befehl um zu wissen wie schnell der Bot reagieren kann!",
  execute(message, args, client) {
    //react with approve emoji
    message.react("✅");
    //send the Ping embed
    message.reply(new MessageEmbed().setColor("#9be5e0").setTitle(":ping_pong: `" + client.ws.ping + "ms`"));
  }
}