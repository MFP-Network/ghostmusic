const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mfp-network",
  aliases: ["mfp", "network", "mfp-n"],
  description: "Unser Netzwerk",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("Erfahre etwas über das MFP-Network")
      .setDescription("Das MFP-Netzwerk ist eine Gemeinschaft von Projekten in allen Gebieten. Ob Onlineshop, Server oder Community. Das MFP-Network hält zusammen!")
      .setColor("#4B180F")
      .setAuthor('Ghostmusik','https://mfp-network.com/wp-content/uploads/2022/07/Braun-orange-weisses-Logo-mit-Illustration-Festival-Pandaemonium.png')
      .setThumbnail(message.guild.iconURL())
      .addField(`Überzeug dich doch selber und werde auch du Netzwerkpartner!`, 'https://mfp-network.com', true)

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};