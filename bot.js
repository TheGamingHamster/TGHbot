const Discord = require ("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix;

client.on("ready", () => {
	console.log("I am ready!");
});	

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find('name', 'lobby');
	if (!channel) return;
	channel.send(`Welcome to the discord server ${member} :wink: !`);
});		

client.on('guildMemberRemove', member => {
	const channel = member.guild.channels.find('name', 'lobby');
	if (!channel) return;
	channel.send(`${member} has left the discord server :pensive:`);
});	

client.on("message", (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	if (message.content.startsWith(prefix + "TGHbot")) {
		message.channel.send("Hallo ik ben de TGHbot en ik ben gemaakt door TheGamingHamster!");
	} else
	if (message.content.startsWith(prefix + "TGH")) {
		message.channel.send("De TGH-Compagny is een groep Youtubers die opgericht is door TheGamingHamster");	
	} else	
	if (message.content.startsWith(prefix + "Fortnite download")) {
		message.channel.send("Fortnite is een leuk spel als je het wil downloaden ga naar hier: https://www.epicgames.com/");	
	} else
	if (message.content.startsWith(prefix + "Fortnite")) {
		message.channel.send("Vraag eerst eens of je kan joinen in de channel!")
	} else
	if (message.content.startsWith(prefix + "game music")) {
		message.channel.send("Deze groep maakt music over games: https://www.youtube.com/results?search_query=nerdout");
	} else
	if (message.content.startsWith(prefix + "TGH YT")) {
		message.channel.send("DIt is het YT kanaal van TGH en vergeet niet te abonneren!: https://www.youtube.com/channel/UCtX6xAsawbuNHuRQeABSkdQ?view_as=subscriber");
	}	
});

client.on("message", (message) => {
	if (message.content.startsWith("Hey")) {
		message.channel.send("Hallo, vergeet niet als iemand in opname zit join dan niet zomaar!");
	} else
	if (message.content.startsWith("Doei")) {
		message.channel.send("Waarom verlaat je ons? Doe dat ons niet aan! :sob:");
	} else
	if (message.content.startsWith("Hoi")) {
		message.channel.send("Hallo, vergeet niet als iemand in opname zit join dan niet zomaar!");
	} else
	if (message.content.startsWith("school")) {
		message.channel.send("Neeeeee! Waarom stuur je dat ik wil daar nu echt niet aan denken bro! :sob: :sob: ECht niet nee! Jij zou eigenlijk geband moeten worden dit is een chat over games en van een YT compagny man dan zet ja dat woord niet! :sob:");
	}	
});

client.login(procces.env.BOT_TOKEN);
