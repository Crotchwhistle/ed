const { MessageEmbed } = require('discord.js')

module.exports = {
    callback: (message, text) => {
        message.reply("Here's a list of my commands!")
        const helpEmbed = new MessageEmbed()
            .setTitle("Commands")
            .setDescription("A simple list of the things you can tell eddie to do (shocking, i know)")
            .setAuthor({ name: "eddie bot", iconURL: 'https://cdn.discordapp.com/attachments/964294368074825770/965853882616012820/ed.png?width=631&height=473'})
            .addFields(
                {
                    name: 'Ping', value: "`ed!help`, returns pong!", inline: true
                },
                {
                    name: 'Addition', value: '`ed!add <number> <number>` adds the numbers, an infinite amount of numbers can be used', inline: true
                },
            )
            .setColor("PURPLE")
            .setFooter("you're mother hung herslef", "https://i.ytimg.com/vi/Z-JD_iYWCP4/hqdefault.jpg")
            .setTimestamp()
        message.channel.send({ embeds: [helpEmbed] })
    }
}