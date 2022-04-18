const { Client, Intents } = require('discord.js');
require("dotenv").config()

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
    let handler = require('./commandHandler')
    if (handler.default) handler = handler.default

    handler(client)
});

client.login(process.env.TOKEN)