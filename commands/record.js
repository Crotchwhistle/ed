const note = require("../Schemas/noteSchema")

module.exports = {
    callback: async (message, ...args) => {
        const index = message.content.indexOf(" ");
        const description = message.content.slice(index + 1);
        try {
            await note.create({
                description,
                userId: message.author.id,
            });
            message.reply("🤜🏿🥩")
        } catch (err) {
            console.log(err);
            message.reply("bruh i couldnt record it you gay faggot");
        }
    }
}