const note = require("../Schemas/noteSchema")

module.exports = {
    callback: async (message, text) => {
        const args = message.content.split(' ')
        if (args.length === 1) {
            const notes = await note.find()
            let description = ''
            for (const i in notes) {
                description += `${parseInt(i) + 1}. ${notes[i].description}\n`
            }
            message.reply(description)
        } else {
            console.log("no args?")
        }
    }
}