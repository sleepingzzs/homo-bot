const fs = require("fs");

module.exports = (client) => {
	const commandFolders = fs.readdirSync("./commands");

	for (const folder of commandFolders) {
		const commandFolders = fs
			.readdirSync(`./commands/${folder}`)
			.filter((file) => file.endsWith(".js"));

		for (const file of commandFolders) {
			const command = require(`../commands/${folder}/${file}`);
			const isAdmin = command.admin;
			client.commands.set(command.name, command, isAdmin);
		}
	}
};
