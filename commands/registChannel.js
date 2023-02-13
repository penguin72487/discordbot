const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('申請頻道')
		.setDescription('你想要臨時的小群組嗎?'),
	async execute(interaction) {
		beTester = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setCustomId('beTester')
				.setLabel('成為測試者')
				.setStyle(ButtonStyle.Primary),
		);
        forgetIt = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setCustomId('forgetIt')
				.setLabel('算了')
				.setStyle(ButtonStyle.Primary),
		);
		await interaction.reply({ content: '請按照步驟完成申請', components: [beTester,forgetIt],fetchReply: true });
		
	},
	
};
