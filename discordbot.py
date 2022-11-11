#導入 Discord.py
import discord
from discord.ext import commands

#client 是我們與 Discord 連結的橋樑
client = discord.Client(intents=discord.Intents.default())
bot= commands.Bot(intents=discord.Intents.default(),command_prefix='[')

#調用 event 函式庫
@client.event
#當機器人完成啟動時
async def on_ready():
    print('目前登入身份：', client.user)

@client.event
#當有訊息時
async def on_message(message):
    #排除自己的訊息，避免陷入無限循環
    print(message) 
    if message.author == client.user:
        return
    #如果包含 ping，機器人回傳 pong
    if message.content == 'ping':
        await message.channel.send('pong')
        
        
@bot.command()

async def ping(ctx):
    await ctx.send(bot.latency)
    

client.run('MTA0MDUyNjQxNzczNTE4ODUyMA.GV16Gv.WwO5sJrXOlrV5kMgC-qMNKkw_B4X8uCE-fGyc4') #TOKEN 在剛剛 Discord Developer 那邊「BOT」頁面裡面
