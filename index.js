const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

client.on("messageCreate", (message) => {
	if (message.author.bot) return;
	const user = message.author.globalName;
	message.reply("Hello " + user + "!");
});

client.login(process.env.discord_token);
