const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		const msg = await interaction.reply({
      content: "正在計算延遲......",
      fetchReply: true
    });
	const ping = msg.createdTimestamp - interaction.createdTimestamp;
      
    interaction.editReply(`機器人延遲：${ping} ms`) 
		// await interaction.reply('Pong!');
	},
};