const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js');

module.exports = {
	farm: new ActionRowBuilder().addComponents(
        new ButtonBuilder()
            .setCustomId('primary')
            .setLabel('鋤!!!')
            .setStyle(ButtonStyle.Primary),
    ),
	async execute(interaction) {
		await interaction.reply({ content: '想要鋤大地了嗎?', components: [farm],components: [wait] });
	},
};
// module.exports = {
// 	farm: new ActionRowBuilder().addComponents(
//         new ButtonBuilder()
//             .setCustomId('primary')
//             .setLabel('鋤!!!')
//             .setStyle(ButtonStyle.Primary),
//     ),
//     wait: new ActionRowBuilder().addComponents(
//         new ButtonBuilder()
//             .setCustomId('Secondary')
//             .setLabel('再想一下')
//             .setStyle(ButtonStyle.Secondary),
//     ),
// 	async execute(interaction) {
// 		await interaction.reply({ content: '想要鋤大地了嗎?', components: [farm],components: [wait] });
// 	},
// };

// client.on(Events.InteractionCreate, async interaction => {
// 	if (!interaction.isChatInputCommand()) return;

// 	if (interaction.commandName === 'button') {
// 		const farm = new ActionRowBuilder()
// 			.addComponents(
// 				new ButtonBuilder()
// 					.setCustomId('primary')
// 					.setLabel('鋤!!!')
// 					.setStyle(ButtonStyle.Primary),
// 			);
//         const wait = new ActionRowBuilder()
//         .addComponents(
//             new ButtonBuilder()
//                 .setCustomId('Secondary')
//                 .setLabel('鋤!!!')
//                 .setStyle(ButtonStyle.Secondary),
//         );

// 		await interaction.reply({ content: '想要鋤大地了嗎?', components: [farm] });
// 	}
// });