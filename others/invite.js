const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv", "einladen"],
  description: "Lade den Bot ein.",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("Füge uns deinem Server hinzu!")
      .setDescription("Sie lieben es, mich zu benutzen? Großartig, vielen Dank! Erwägen Sie das Hinzufügen zu Ihrem Server!")
      .setColor("#4B180F")
      .setAuthor('Ghostmusic','https://mfp-network.com/wp-content/uploads/2022/07/Braun-orange-weisses-Logo-mit-Illustration-Festival-Pandaemonium.png')
      .setThumbnail(message.guild.iconURL())
      .addField(`Geh auf unsere Website um den Bot einfach und schnell einzuladen`, 'https://mfp-network.com/ghostmusic', true)

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};