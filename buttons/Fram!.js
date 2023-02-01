const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
module.exports = {
    data :{
        name : 'Farm!'
    },
    async  execute(interaction) {
        farmPlus1 = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setCustomId('farmPlus1')
				.setLabel('鋤+1')
				.setStyle(ButtonStyle.Primary),
		);
        nextCar = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('nextCar')
                .setLabel('我下一車好了')
                .setStyle(ButtonStyle.Secondary),
        );
        await interaction.reply({ content: `<@${interaction.user.id}>要開車車囉~快上車，還有誰要上車`, components: [farmPlus1,nextCar]});
        
    }
};

