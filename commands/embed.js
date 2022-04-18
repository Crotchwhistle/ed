const { MessageEmbed } = require('discord.js')

module.exports = {
    callback: (message, text) => {
        const embed = new MessageEmbed()
            .setTitle("you're mother")
            .setDescription("suhung herself")
            .setImage(message.author.avatarURL())
        message.channel.send({embeds: [embed]})
    }
}