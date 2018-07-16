


module.exports.run = async (bot, message, args) => {
	if(message.author.id !== "390179632911089666") return;

	try {
		var code = args.join(" ");
		var evaled = eval(code);

		if(typeof evaled !== "String")
			evaled = require("util").inspect(evaled);

		message.channel.sendCode("x1", clean(evaled));
	} catch(err) {
		message.channel.sendMessage(`\` ERROR\` \`\`\`x1\n${clean(err)}\n\`\`\``);


	}





}


function clean(text){
	if(typeof(text) === "string")
		return text.replace(/` /g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
	else
		return text;
}

module.exports.help = {
	name: "eval",
	desclist: "This command can be used only by the creator",
	usage: "sh!eval"
}

