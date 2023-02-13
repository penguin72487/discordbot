module.exports = {
    data :{
        name : 'forgetIt'
    },
    async  execute(interaction) {

        await interaction.message.delete();
        // await interaction.reply(`<@${interaction.user.id}> 說再等等`);
    }
};
