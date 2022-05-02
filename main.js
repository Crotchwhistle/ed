const { Client, Intents } = require('discord.js');
const mongoose = require('mongoose')
require("dotenv").config()

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });

client.on("ready", async () => {
    await mongoose.connect(
        process.env.MONGO_URI,
        {
            keepAlive: true 
        }
    )

    console.log(`Logged in as ${client.user.tag}`)
    let handler = require('./commandHandler')
    if (handler.default) handler = handler.default

    handler(client)
});

client.login(process.env.TOKEN)