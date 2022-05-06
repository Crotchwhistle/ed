const { MessageEmbed } = require('discord.js')

module.exports = {
    callback: (message, text) => {
        insult(message);

        function insult(message) {
            var responses = ["Stfu gay faggot", "Stfu wanna fight", "Have you had ali baba before?", "Oml", "Stfu you fat bitch"]
            var rndmiser = Math.floor(Math.random() * responses.length)

            message.reply(responses[rndmiser]);
        }
    }
}