module.exports = {
    data :{
        name : 'beTester'
    },
    async  execute(interaction) { 
        // 從互動中獲取 Guild 對象
        const guild = interaction.message.guild;
        const member = interaction.message.member;
      
        // 查找身分組
        const role = guild.roles.cache.find(r => r.name === "botTester");

        // 如果身分組存在，則直接加入身分組
        if (role) {
          await member.cache.roles.add(role)
            .catch(console.error);
        } else {
          // 創建身分組
          await guild.roles.create({
            data: {
              name: "botTester",
              color: "BLUE",
              permissions: [
                  "SEND_MESSAGES",
                  "READ_MESSAGE_HISTORY",
                  "ATTACH_FILES",
                  "EMBED_LINKS",
                  "USE_EXTERNAL_EMOJIS",
                  "ADD_REACTIONS",
                  "SPEAK"
                ]
            }
          })
          .catch(console.error);
          await member.roles.add(role)
            .catch(console.error);
        }

        await interaction.reply({ content: '恭喜成為測試者'})
      },
};
