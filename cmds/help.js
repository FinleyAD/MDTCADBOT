const Discord = require ("discord.js");
const fs = require("fs");


module.exports.run = async (bot, message, args) => {
fs.readdir("./cmds/",  (err, files) => {
    if(err) {
        console.error(err);
        return;
    }

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.lenght <= 0) {
        console.log("No commands to load!");
        return;
    }

    var namelist = "";
    var desclist = "";
    var usage = "";

    let result = "";
    jsfiles.forEach((f, i) => {
        let props = require(`./${f}`);
        namelist = props.help.name;
        desclist = props.help.desclist;
        usage = props.help.usage;

     
        result += `**${namelist}** \n${desclist} \n${usage}\n`;
    });
    message.author.send(result);
})
}


module.exports.help = {
	name: "help",
  desclist: "Lists all of the bot's commands in your Dm's",
  usage: "sh!help"

}