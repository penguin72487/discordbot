module.exports = {
    data :{
        name : 'nextCar'
    },
    async  execute(interaction) {
        await interaction.reply({ content: `<@${interaction.user.id}>下一車好了`});
        
    }
};

