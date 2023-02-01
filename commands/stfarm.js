const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('鋤')
		.setDescription('你想要鋤大地嗎?'),
	async execute(interaction) {
		farm = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setCustomId('Farm!')
				.setLabel('鋤!!!')
				.setStyle(ButtonStyle.Primary),
		);
        wait = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('WaitMore')
                .setLabel('再等等')
                .setStyle(ButtonStyle.Secondary),
        );
		await interaction.reply({ content: '想要鋤大地了嗎?', components: [farm,wait],fetchReply: true });
		
	},
	
};
