const { Client, Intents } = require('discord.js');
require("dotenv").config()

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
});

client.on("messageCreate", (message) => {
    if (message.content == "hello"){
        message.reply("bro what")
    }
})

client.login(process.env.TOKEN)