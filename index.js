const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
let raisins = JSON.parse(fs.readFileSync("./raisins.json", "utf8"));
let list = JSON.parse(fs.readFileSync("./list.json", "utf8"));
let gifs = JSON.parse(fs.readFileSync("./gifs.json", "utf8"));
var cutepic = JSON.parse(fs.readFileSync("./cutepic.json", "utf8"));
var z;
var x;
var i;
var ouiounon = ["Oui.", "Non.", "Nope!", "Absolument!", "Je n'en serais pas si sûre..", "Probablement?", "Probablement pas.", "P'tet.", "Essaye!", "Je n'en sais rien..", "fucc u", "M'en fous.", "OUIOUIOUIOUI", "LOL NON"];

function includes(args, roles) {
  for (i = 0;i <= roles.length; i++) {
    if (args == roles[i]) {
      return true;
    }
  }
}

function randomWord(nbr) {
  var z = "";
  for (i=1;i<nbr;i++) {
    var p = Math.floor(Math.random() * 26);
    if (p == 1) z += "a";
    if (p == 2) z += "b";
    if (p == 3) z += "c";
    if (p == 4) z += "d";
    if (p == 5) z += "e";
    if (p == 6) z += "f";
    if (p == 7) z += "g";
    if (p == 8) z += "h";
    if (p == 9) z += "i";
    if (p == 10) z += "j";
    if (p == 11) z += "k";
    if (p == 12) z += "l";
    if (p == 13) z += "m";
    if (p == 14) z += "n";
    if (p == 15) z += "o";
    if (p == 16) z += "p";
    if (p == 17) z += "q";
    if (p == 18) z += "r";
    if (p == 19) z += "s";
    if (p == 20) z += "t";
    if (p == 21) z += "u";
    if (p == 22) z += "v";
    if (p == 23) z += "w";
    if (p == 24) z += "x";
    if (p == 25) z += "y";
    if (p == 26) z += "z";
  }
  return z;
}

bot.on("message", (message) => {

  var z = false;
  if (message.channel.type === "dm" && message.author.id !== config.botid) bot.users.get(config.ownerid).send(message.author.username + " - " + message.content);
  if (message.content.toLowerCase() === "owo") {message.channel.send("what's this?"); return;}
  if (message.content.toLowerCase() === "lmao") {message.channel.send("LMFAO"); return;}
  if (message.content.toLowerCase() === "the game") {message.channel.send("is fun"); return;}
  if (message.content.toLowerCase() === "beep") {message.channel.send("boop"); return;}
  if(!message.content.startsWith(config.prefix) || message.author.bot) return;
  if (message.content.substring(message.content.length - 1) === "-") return;


  var args = message.content.substring(config.prefix.length).split(" ");

  switch (args[0].toLowerCase()) {

    case "help":
      if (args[1]) {
        switch (args[1].toLowerCase()) {

          case config.prefix + "help":
            var helphelpembed = new Discord.RichEmbed()
              .setColor(0xFF6600)
              .setDescription("`" + config.prefix + "help`")
              .addField("\n\n**Description: **", "\nAffiche l'ensemble des commandes existantes.")
              .addField("\n\n**Utilisation: ** ", "\n`" + config.prefix + "help`");
            message.channel.send({embed: helphelpembed});
            break;

          case config.prefix + "ping":
            var helppingembed = new Discord.RichEmbed()
              .setColor(0xFF6600)
              .setDescription("`" + config.prefix + "ping`")
              .addField("\n\n**Description: **", "\nMe fais répondre \"Pong!\". Cette commande n'a aucune autre utilité pour le moment.")
              .addField("\n\n**Utilisation: **", "\n`" + config.prefix +"ping`");
            message.channel.send({embed: helppingembed});
            break;

          case config.prefix + "roll":
            var helprollembed = new Discord.RichEmbed()
              .setColor(0xFF6600)
              .setDescription("`" + config.prefix + "roll`")
              .addField("\n\n**Description: **", "\n\nLance un dé équilibré à 6 faces et vous donne le résultat.")
              .addField("\n\n**Utilisation: **", "\n\n`" + config.prefix + "roll`");
            message.channel.send({embed: helprollembed});
            break;

          case config.prefix + "8ball":
            var help8ballembed = new Discord.RichEmbed()
              .setColor(0xFF6600)
              .setDescription("`" + config.prefix + "8ball`")
              .addField("\n\n**Description: **", "\n\nPosez-moi une question, et je vous répondrai :wink:")
              .addField("\n\n**Utilisation: **", "\n\n`" + config.prefix + "8ball Posez votre question ici?`");
            message.channel.send({embed: help8ballembed});
            break;

          case config.prefix + "info":
            var helpinfoembed = new Discord.RichEmbed()
              .setColor(0xFF6600)
              .setDescription("`" + config.prefix + "info`")
              .addField("\n\n**Description: **", "\n\nDévoile des informations à mon propos.")
              .addField("\n\n**Utilisation: **", "\n\n`" + config.prefix + "info`");
            message.channel.send({embed: helpinfoembed});
            break;

          case config.prefix + "getavatar":
            var helpgetavatarembed = new Discord.RichEmbed()
              .setColor(0xFF6600)
              .setDescription("`" + config.prefix + "getavatar`")
              .addField("\n\n**Description: **", "\n\nÀ chaque utilisation de cette commande, je vous donnerai un lien vers l'image de votre avatar!\nEt si vous mentionnez un utilisateur, vous aurez son avatar à la place!")
              .addField("\n\n**Utilisation: **", "\n\n`" + config.prefix + "getavatar`\n ou \n`" + config.prefix + "getavatar @mention`");
            message.channel.send({embed: helpgetavatarembed});
          break;

          case config.prefix + "say":
            var helpsayembed = new Discord.RichEmbed()
              .setColor(0xFF6600)
              .setDescription("`" + config.prefix + "say`")
              .addField("\n\n**Description: **", "\n\nJe répèterais tout ce que vous me dites de dire!\nSi vous rajoutez le mot clé \"(delete)\" à la fin de votre message, j'effacerais votre message et le fait que vous m'ayez demandé de dire ça passera inaperçu :wink:")
              .addField("\n\n**Utilisation: **", "\n\n`" + config.prefix + "say Dites ici ce que vous voulez que je répète!`\n ou \n`" + config.prefix + "say Dites ici ce que vous voulez que je dise! (delete)`");
            message.channel.send({embed: helpsayembed});
            break;

          case config.prefix + "getid":
            var helpgetidembed = new Discord.RichEmbed()
              .setColor(0xFF6600)
              .setDescription("`" + config.prefix + "getid`")
              .addField("\n\n**Description: **", "\nVous donne votre ID d'utilisateur. Si vous mentionnez quelqu'un, vous obtiendrez son ID d'utilisateur. Si par contre vous rajoutez `thisguild`, vous obtiendrez l'ID du serveur.")
              .addField("\n\n**Utilisation: ** ", "\n`" + config.prefix + "getid`\n ou \n`" + config.prefix + "getid @mention`");
            message.channel.send({embed: helpgetidembed});
            break;

          case config.prefix + "myraisins":
            var helpmyraisinsembed = new Discord.RichEmbed()
              .setColor(0xFF6600)
              .setDescription("`" + config.prefix + "myraisins`")
              .addField("\n\n**Description: **", "\nVous indique votre nombre de raisins! Mentionnez un utilisateur pour voir combien de raisins il possède!")
              .addField("\n\n**Utilisation: ** ", "\n`" + config.prefix + "myraisins`\n ou \n`" + config.prefix + "myraisins @mention`");
            message.channel.send({embed: helpmyraisinsembed});
            break;

          case config.prefix + "giveraisins":
            var helpgiveraisinsembed = new Discord.RichEmbed()
              .setColor(0xFF6600)
              .setDescription("`" + config.prefix + "giveraisins`")
              .addField("\n\n**Description: **", "\nPermets de donner un certain nombre de raisins à un utilisateur. Seul le `bot owner` peut utiliser cette commande.")
              .addField("\n\n**Utilisation: ** ", "\n`" + config.prefix + "giveraisins @mention 0`");
            message.channel.send({embed: helpgiveraisinsembed});
            break;

          case config.prefix + "betflip":
            var helpbetflipembed = new Discord.RichEmbed()
              .setColor(0xFF6600)
              .setDescription("`" + config.prefix + "betflip`")
              .addField("\n\n**Description: **", "\nVous permets de placer des paris! Se joue au pile (p) ou face (f).\nIl faut indiquer le côté sur lequel vous pariez puis le montant que vous souhaitez parier!\nSi vous gagnez, vous doublez votre mise. Sinon... vous la perdez.")
              .addField("\n\n**Utilisation: **", "\n`" + config.prefix +"betflip p 10`\n ou \n`" + config.prefix + "betflip f 10`");
            message.channel.send({embed: helpbetflipembed});
            break;

          case config.prefix + "embed":
          var helpembedembed = new Discord.RichEmbed()
            .setColor(0xFF6600)
            .setDescription("`" + config.prefix + "embed`")
            .addField("\n\n**Description: **", "\nVous permets de créer un embed contenant du texte.")
            .addField("\n\n**Utilisation: **", "\n`" + config.prefix +"embed texte`");
          message.channel.send({embed: helpembedembed});
            break;

          case config.prefix + "gif":
            var helpgifembed = new Discord.RichEmbed()
              .setColor(0xFF6600)
              .setDescription("`" + config.prefix + "gif`")
              .addField("\n\n**Description: **", "\nEnvoie un gif au hasard.\nOu alors, précisez un nombre entre 1 et " + gifs.length + " (compris) pour obtenir le gif correspondant!")
              .addField("\n\n**Utilisation: **", "\n`" + config.prefix +"gif`\n ou \n`" + config.prefix + "gif 1`.");
            message.channel.send({embed: helpgifembed});
            break;

          case config.prefix + "ihaveacripplingdepression":
            var helpdepressionembed = new Discord.RichEmbed()
              .setColor(0xFF6600)
              .setDescription("`" + config.prefix + "ihaveacripplingdepression`")
              .addField("\n\n**Description: **", "\nSi vous utilisez cette commande, je vous répondrai avec un message supportif! :hearts:\nSi vous sentez le besoin d'utiliser cette commande, s'il vous plait, parlez-en à quelqu'un et ne vous confiez pas qu'à moi...")
              .addField("\n\n**Utilisation: **", "\n`" + config.prefix +"ihaveacripplingdepression`");
            message.channel.send({embed: helpdepressionembed});
            break;

          case config.prefix + "addtolist":
            var helpaddtolistembed = new Discord.RichEmbed()
              .setColor(0xFF6600)
              .setDescription("`" + config.prefix + "addtolist`")
              .addField("\n\n**Description: **", "\nAjoute un objet à la liste que je maintiens. Il est possible de voir cette liste en faisant `" + config.prefix + "showlist`.")
              .addField("\n\n**Utilisation: **", "\n`" + config.prefix +"addtolist Objet1`");
            message.channel.send({embed: helpaddtolistembed});
            break;

          case config.prefix + "showlist":
            var helpshowlistembed = new Discord.RichEmbed()
              .setColor(0xFF6600)
              .setDescription("`" + config.prefix + "ihaveacripplingdepression`")
              .addField("\n\n**Description: **", "\nÀ l'utilisation de cette commande, je vous montrerai le contenu de la liste que je maintiens.")
              .addField("\n\n**Utilisation: **", "\n`" + config.prefix +"showlist`");
            message.channel.send({embed: helpshowlistembed});
            break;

          case config.prefix + "removefromlist":
            var helpremovefromlistembed = new Discord.RichEmbed()
              .setColor(0xFF6600)
              .setDescription("`" + config.prefix + "removefromlist`")
              .addField("\n\n**Description: **", "\nCette commande permets d'effacer un objet de la liste que je maintiens, qu'il est possible de voir en faisant `" + config.prefix + "showlist`.\nIl faut utiliser l'indexe (le nombre affiché devant) l'objet à effacer pour l'effacer.")
              .addField("\n\n**Utilisation: **", "\n`" + config.prefix +"removefromlist 42`");
            message.channel.send({embed: helpremovefromlistembed});
            break;

          case config.prefix + "eraselist":
            var helperaselistembed = new Discord.RichEmbed()
              .setColor(0xFF6600)
              .setDescription("`" + config.prefix + "eraselist`")
              .addField("\n\n**Description: **", "\nCette commande vous permets d'effacer l'intégrité de la liste en une seule commande.\n:warning: Attention toutefois, il est impossible de revenir en arrière! :warning:")
              .addField("\n\n**Utilisation: **", "\n`" + config.prefix +"eraselist`");
            message.channel.send({embed: helperaselistembed});
            break;

          case config.prefix + "addgif":
            var helpaddgifembed = new Discord.RichEmbed()
              .setColor(0xFF6600)
              .setDescription("`" + config.prefix + "addgif`")
              .addField("\n\n**Description: **", "\nVous permets d'ajouter un gif à la liste de gifs!")
              .addField("\n\n**Utilisation: **", "\n`" + config.prefix +"addgif http://liendugif`");
            message.channel.send({embed: helpaddgifembed});
            break;

          case config.prefix + "giflist":
            var helpgiflistembed = new Discord.RichEmbed()
              .setColor(0xFF6600)
              .setDescription("`" + config.prefix + "giflist`")
              .addField("\n\n**Description: **", "\nVous liste tout les gifs de la liste de gifs!")
              .addField("\n\n**Utilisation: **", "\n`" + config.prefix +"giflist`");
            message.channel.send({embed: helpgiflistembed});
            break;

          case config.prefix + "spam":
            var helpspamembed = new Discord.RichEmbed()
              .setColor(0xFF6600)
              .setDescription("`" + config.prefix + "spam`")
              .addField("\n\n**Description: **", "\nCette commande vous permet de répeter plusieurs fois la même phrase. Il suffit d'indiquer le nombre de répétitions puis la phrase à répeter!\nToutefois, attention à ne pas en abuser.")
              .addField("\n\n**Utilisation: **", "\n`" + config.prefix +"spam 4 Wow!`");
            message.channel.send({embed: helpspamembed});
            break;

          case config.prefix + "roulette":
            var helprouletteembed = new Discord.RichEmbed()
              .setColor(0xFF6600)
              .setDescription("`" + config.prefix + "roulette`")
              .addField("\n\n**Description: **", "\nJouez à la roulette, comme dans un véritable casino! Vous pouvez parier soit sur un nombre, soit sur une couleur.\nGagnez 10x votre mise en pariant sur un nombre entre 0 et 10 compris, ou 2 fois votre mise en pariant sur le rouge ou le noir.\nPour l'utilisation, il faut d'abord écrire ce sur quoi vous pariez puis le montant que vous pariez.\n**Bonne chance!**")
              .addField("\n\n**Utilisation: **", "\n`" + config.prefix +"roulette 10 42`\n ou \n`" + config.prefix + "roulette rouge 100`");
            message.channel.send({embed: helprouletteembed});
            break;

          default:
            message.channel.send("Je ne reconnais pas cette commande. N'oubliez pas d'utiliser le prefixe " + config.prefix + " avant la commande.");
            break;

        }
      }
      else {
        var helpembed = new Discord.RichEmbed()
          .addField("Liste des commandes:", "`" + config.prefix + "help`,\n`" + config.prefix + "ping`,\n`" + config.prefix + "roll`,\n`" + config.prefix + "8ball`,\n`"
                    + config.prefix + "info`,\n`" + config.prefix + "getavatar`,\n`" + config.prefix + "say`,\n`" + config.prefix + "getid`,\n`" + config.prefix +
                    "myraisins`,\n`" + config.prefix + "giveraisins`,\n`" + config.prefix + "betflip`.", true)
          .addField("Liste des commandes:","\n`" + config.prefix + "embed`,\n`" + config.prefix + "gif`,\n`"
                    + config.prefix + "ihaveacripplingdepression`, \n`" + config.prefix + "addtolist`,\n`" + config.prefix + "showlist`,\n`" + config.prefix +
                    "removefromlist`,\n`" + config.prefix + "eraselist`,\n`" + config.prefix + "addgif`,\n`" + config.prefix + "giflist`,\n`" + config.prefix +
                    "spam`,\n`" + config.prefix + "roulette`.", true)
          .setColor(0xFF6600)
          .setDescription("Faites `" + config.prefix + "help *commande* ` pour de l'aide sur l'utilisation d'une commande")
          .setFooter("Pour utiliser ces commandes, vous devez utiliser le préfixe de commande. Ce préfixe est " + config.prefix);
        message.channel.send({embed: helpembed});
      }
      break;

    case "ping": //pour check si le bot est online, il réponds simplement pong si oui
      message.channel.send("Pong!");
      break;

    case "roll": // lance un dé. on obtient entre 1 et 6
      var roll = Math.floor(Math.random() * 6) + 1;
      message.channel.send("Vous avez obtenu un " + roll + "!");
      break;

    case "8ball": //principe du 8ball. posez une question et ça vous réponds une réponse au hasard
      if(args[1]) message.channel.send(ouiounon[Math.floor(Math.random() * ouiounon.length)]);
      else message.channel.send("..Je ne peux pas répondre s'il n'y a pas de question.");
      break;

    case "info": // Informations sur Athena <3<3
      var infoembed = new Discord.RichEmbed()
        .setThumbnail(bot.user.avatarURL)
        .addField("Informations sur Athena", "\nAthena est un bot pour Discord créé par Inco#8039.")
        .setColor(0xFF6600)
        .setTimestamp();
      message.channel.send({embed: infoembed});
      break;

    case "getavatar": // Pour obtenir un avatar
      if (!args[1]) message.channel.send(message.author.avatarURL);
      else {
        var mentionneduser = message.mentions.users.first();
        message.channel.send(mentionneduser.avatarURL);
      }
      break;

    case "say": //Pour faire répeter un message au bot
      var mess = message.content.substring(4);
      if (args[args.length - 1] == "(delete)") {
        mess = mess.replace(args[args.length - 1], "");
        message.delete();
        message.channel.send(mess);
      } else message.channel.send(mess);
      break;

    case "getid": //pour obtenir l'ID d'un utilisateur, si pas d'arguments alors id de l'auteur du message
      if (!args[1] || args[1] !== "thisguild") message.channel.send(message.author.id);
      else if (!args[1]){
        var mentionneduser = message.mentions.users.first();
        message.channel.send(mentionneduser.id);
      } else if (message.channel.type === "text") message.channel.send("L'ID de ce serveur est " + message.guild.id);
        else if (message.channel.type === "dm") message.channel.send("L'ID de ce channel est " + message.DMChannel.id);
        else return;
      break;

    case "giveraisins": //Pour donner des raisins à un utilisateur
      if (message.author.id != config.ownerid) message.channel.send("Désolé, mais je ne peut pas vous permettre d'effectuer cette action. :wink:");
      else {
        var mentionneduser = message.mentions.users.first();
        if (!raisins[mentionneduser.id]) {
          raisins[mentionneduser.id] = 0 + Number(args[2]);
          message.channel.send("Je viens de donner " + args[2] + " :grapes: à cet utilisateur!");
        }
        else {
          raisins[message.author.id] = Number(raisins[message.author.id]) + Number(args[2]);
          message.channel.send("Je viens de donner " + args[2] + " :grapes: à cet utilisateur!");
        }
      }
      fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
        if (err) console.error(err)
      });
      break;

    case "myraisins": // Pour vérifier son nombre de raisins
      if (!raisins[message.author.id]) {
        raisins[message.author.id] =  0;
        fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
          if (err) console.error(err)
        });
      }
      var mentionneduser = message.mentions.users.first();
      if (!mentionneduser) message.channel.send("Vous possédez " + raisins[message.author.id] + " :grapes: !");
      else message.channel.send("Cet utilisateur possède " + raisins[mentionneduser.id] + " :grapes: !");
      break;

    case "betflip": //pari
      if (isNaN(args[2])) {
        message.channel.send("Cette commande à été utilisée incorrectement. Vérifiez son utilisation.");
        return;
      }
      if (args[2] > raisins[message.author.id]) message.channel.send("Vous ne possédez pas assez de :grapes: pour ce pari.");
      else {
        var result = Math.floor(Math.random() * 2 + 1);
        if (result === 1) { // 1 = pile, 2 = face
          if (args[1] === "p") { //si l'utilisateur à choisi pile et a obtenu pile
            message.channel.send("Vous obtenez pile! Vous gagnez, vous doublez alors votre mise, et obtenez " + 2*args[2] + " :grapes: !");
            raisins[message.author.id] = raisins[message.author.id] + 2 * args[2];
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          else if (args[1] === "f") { //si l'utilisateur à choisi face et a obtenu pile
            message.channel.send("Vous obtenez pile! Vous perdez alors votre mise, soit " + args[2] + " :grapes: !");
            raisins[message.author.id] = raisins[message.author.id] - args[2];
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          else {
            message.channel.send("Cette commande à été utilisée incorrectement. Vérifiez son utilisation.");
            return;
          }
        }
        else {
          if (args[1] === "f") { //si l'utilisateur à choisi face et a obtenu face
            message.channel.send("Vous obtenez face! Vous gagnez, vous doublez alors votre mise, et obtenez " + 2*args[2] + " :grapes: !");
            raisins[message.author.id] = raisins[message.author.id] + 2 * args[2];
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          else if (args[1] === "p") { //si l'utilisateur à choisi pile et a obtenu face
            message.channel.send("Vous obtenez face! Vous perdez alors votre mise, soit " + args[2] + " :grapes: !");
            raisins[message.author.id] = raisins[message.author.id] - args[2];
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          else {
            message.channel.send("Cette commande à été utilisée incorrectement. Vérifiez son utilisation.");
            return;
          }
        }
      }
      break;

    case "embed": //Crée un embed avec le contenu voulu par l'utilisateur (à améliorer)
      if (!args[1]) {
        message.channel.send("Il me faut un message à mettre dans cet embed.");
        return;
      }
      else{
        var embed = new Discord.RichEmbed()
          .setDescription(message.content.substring(6))
          .setColor(0xFF6600);
        message.channel.send({embed: embed});
      }
      break;

    case "gif": //Envoie un gif
      if(args[1] && !isNaN(Number(args[1]))) {
        if (Number(args[1]) > gifs.length || Number(args[1]) < 1) message.channel.send("Ce gif n'existe pas... :worried:");
        else message.channel.send(gifs[Number(args[1]) - 1]); //on mets -1 car args va jusque 5 (5 éléments) alors que l'array va de 0 à 4 (dans le cas où il y a 5 gifs)
      }
      else message.channel.send(gifs[Math.floor(Math.random() * gifs.length)]);
      break;

    case "ihaveacripplingdepression": //Envoie un message supportif
      var supportive = ["Ne t'inquiète pas, je suis là pour toi " + message.author.username + " :hearts:",
                        "Je t'aime, " + message.author.username + " :hearts:",
                        "Je serais toujours là pour toi, peu importe ce qu'il se passe! :hearts:",
                        "J'aimerais pouvoir parler avec toi plus souvent, " + message.author.username + " :hearts:"];
      message.channel.send(supportive[Math.floor(Math.random() * supportive.length)]);
      break;

    case "getrole":
      var z = includes(args[1], message.guild.roles);
      if (message.author.id === config.ownerid) {
        if (z == true) {
          if (message.author.role.comparePositionTo(bot.role) < 0) {
            message.member.addRole(message.guild.roles.find("name", args[1]));
            message.channel.send("Fait!");
          }
          else message.channel.send("Je n'ai pas le pouvoir nécessaire pour vous ajouter ce rôle... :c");
        }
        else message.channel.send("Ce rôle n'existe pas!");
      }
      else message.channel.send("Vous n'avez pas accès à cette commande.");
      break;

    case "addtolist":
      args[2] = Number(args[2]);
      if (args[1]) {
        list[randomWord(5)] = message.content.substring(11);
        fs.writeFile("./list.json", JSON.stringify(list), (err) => {
          if (err) console.error(err)
        });
        message.channel.send("\"" + message.content.substring(11) + "\" a été ajouté à la liste!");
      }
      else message.channel.send("Il me faut quelque chose à ajouter à cette liste!");
      break;

    case "showlist":
      if (Object.keys(list).length === 0) {
        message.channel.send("La liste est vide!");
        return;
      }
      if (!liste) var liste = "";
      i = 1;
      for (x in list) {
        liste += i + "." + " " +list[x] + "\n";
        i++;
      }
      message.channel.send(liste);
      break;

    case "removefromlist":
      if (!args[1]) message.channel.send("Il me faut quelque chose à retirer de cette liste!");
      else {
        Number(args[1]);
        if (isNaN(args[1])) {
          message.channel.send("Il faut spécifier un nombre.");
          return;
        }
        if (args[1] < 1 || args[1] > Object.keys(list).length + 1) message.channel.send("La liste ne contient pas d'objet avec ce numéro!");
        else {
          var listkeys = Object.keys(list);
          delete list[listkeys[args[1]-1]];
          fs.writeFile("./list.json", JSON.stringify(list), (err) => {
            if (err) console.error(err)
          });
          message.channel.send("L'objet a bien été effacé!");
        }
      }
      break;

    case "eraselist":
      for (var propriete in list) {
        delete list[propriete];
      }
      fs.writeFile("./list.json", JSON.stringify(list), (err) => {
        if (err) console.error(err)
      });
      message.channel.send("La liste a bien été effacée.");
      break;

    case "repeat":
      if (message.author.id === config.ownerid && message.channel.type === "dm") {
        bot.channels.get("284302225713528834").send(message.content.substring(8));
      }
      else return;
      break;

    case "addgif":
      var giffygif = message.content.substring(8);
      gifs[gifs.length] = String(giffygif);
      fs.writeFile("./gifs.json", JSON.stringify(gifs), (err) => {
        if (err) console.error(err)
      });
      message.channel.send("Le gif a bien été ajouté à la liste! C'est le numéro " + gifs.length + ".")
      break;

    case "giflist":
      var giflist = "";
      var i = 1;
      for (x in gifs) {
        giflist += i + ". [" + gifs[i - 1] + "]\n";
        i++;
      }
      message.channel.send(giflist);
      break;

    case "spam":
      var nbrofspam = 0;
      nbrofspam += Number(args[1]);
      if (nbrofspam > 20) {
        message.channel.send("Hey, ça fait beaucoup trop de messages... je ne vais pas pouvoir vous aider.");
        return;
      };
      var messagetospam = message.content.substring(6 + args[1].length);
      for (i = 0;i < nbrofspam;i++) {
        message.channel.send(messagetospam);
      }
      break;

    case "cutepic":
      if(args[1] && !isNaN(Number(args[1]))) {
        if (Number(args[1]) > cutepic.length || Number(args[1]) < 1) message.channel.send("Cette image n'existe pas... :worried:");
        else message.channel.send(cutepic[Number(args[1]) - 1]); //on mets -1 car args va jusque 5 (5 éléments) alors que l'array va de 0 à 4 (dans le cas où il y a 5 gifs)
      }
      else message.channel.send(cutepic[Math.floor(Math.random() * cutepic.length)]);
      break;

    case "addcutepic":
      var cutiepic = message.content.substring(8);
      cutepic[cutepic.length] = String(cutiepic);
      fs.writeFile("./cutepic.json", JSON.stringify(cutepic), (err) => {
        if (err) console.error(err)
      });
      message.channel.send("L'image a bien été ajouté à la liste! C'est la numéro " + cutepic.length + ".")
      break;

    case "cutepiclist":
      var cutepiclist = "";
      var i = 1;
      for (x in cutepic) {
        cutepiclist += i + ". [" + cutepic[i - 1] + "]\n";
        i++;
      }
      message.channel.send(cutepiclist);
      break;

    case "roulette":
      if (!raisins[message.author.id]) {
        raisins[message.author.id] = 0;
        fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
          if (err) console.error(err)
        });
      }
      if (!args[2]) {
        message.channel.send("Il faut faire une mise!");
        return;
      }
      if (args[2] > raisins[message.author.id] || isNaN(Number(args[2]))) {
        message.channel.send("Vous ne pouvez pas faire cette mise! Vous ne pouvez donc pas jouer.");
        return;
      }
      switch (args[1]) {
        case "0":
          var nombregagnant = Math.floor(Math.random() * 12);
          var gain = Number(args[2]) * 10;
          if (nombregagnant === 0) {
            message.channel.send("Vous avez réussi! Vous avez obtenu un " + nombregagnant + " et décuplez donc votre mise! Vous obtenez alors " + gain + " :grapes:!");
            raisins[message.author.id] = raisins[message.author.id] + gain;
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          else {
            message.channel.send("Vous avez perdu... Vous avez misé un " + args[1] + " mais avez obtenu un " + nombregagnant + "! Vous perdez alors " + args[2] + " :grapes:.");
            raisins[message.author.id] = raisins[message.author.id] - args[2];
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          break;

        case "1":
          var nombregagnant = Math.floor(Math.random() * 11);
          var gain = Number(args[2]) * 10;
          if (nombregagnant === 0) {
            message.channel.send("Vous avez réussi! Vous avez obtenu un " + nombregagnant + " et décuplez donc votre mise! Vous obtenez alors " + gain + " :grapes:!");
            raisins[message.author.id] = raisins[message.author.id] + gain;
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          else {
            message.channel.send("Vous avez perdu... Vous avez misé un " + args[1] + " mais avez obtenu un " + nombregagnant + "! Vous perdez alors " + args[2] + " :grapes:.");
            raisins[message.author.id] = raisins[message.author.id] - args[2];
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          break;

        case "2":
          var nombregagnant = Math.floor(Math.random() * 11);
          var gain = Number(args[2]) * 10;
          if (nombregagnant === 0) {
            message.channel.send("Vous avez réussi! Vous avez obtenu un " + nombregagnant + " et décuplez donc votre mise! Vous obtenez alors " + gain + " :grapes:!");
            raisins[message.author.id] = raisins[message.author.id] + gain;
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          else {
            message.channel.send("Vous avez perdu... Vous avez misé un " + args[1] + " mais avez obtenu un " + nombregagnant + "! Vous perdez alors " + args[2] + " :grapes:.");
            raisins[message.author.id] = raisins[message.author.id] - args[2];
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          break;

        case "3":
          var nombregagnant = Math.floor(Math.random() * 11);
          var gain = Number(args[2]) * 10;
          if (nombregagnant === 0) {
            message.channel.send("Vous avez réussi! Vous avez obtenu un " + nombregagnant + " et décuplez donc votre mise! Vous obtenez alors " + gain + " :grapes:!");
            raisins[message.author.id] = raisins[message.author.id] + gain;
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          else {
            message.channel.send("Vous avez perdu... Vous avez misé un " + args[1] + " mais avez obtenu un " + nombregagnant + "! Vous perdez alors " + args[2] + " :grapes:.");
            raisins[message.author.id] = raisins[message.author.id] - args[2];
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          break;

        case "4":
          var nombregagnant = Math.floor(Math.random() * 11);
          var gain = Number(args[2]) * 10;
          if (nombregagnant === 0) {
            message.channel.send("Vous avez réussi! Vous avez obtenu un " + nombregagnant + " et décuplez donc votre mise! Vous obtenez alors " + gain + " :grapes:!");
            raisins[message.author.id] = raisins[message.author.id] + gain;
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          else {
            message.channel.send("Vous avez perdu... Vous avez misé un " + args[1] + " mais avez obtenu un " + nombregagnant + "! Vous perdez alors " + args[2] + " :grapes:.");
            raisins[message.author.id] = raisins[message.author.id] - args[2];
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          break;

        case "5":
          var nombregagnant = Math.floor(Math.random() * 11);
          var gain = Number(args[2]) * 10;
          if (nombregagnant === 0) {
            message.channel.send("Vous avez réussi! Vous avez obtenu un " + nombregagnant + " et décuplez donc votre mise! Vous obtenez alors " + gain + " :grapes:!");
            raisins[message.author.id] = raisins[message.author.id] + gain;
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          else {
            message.channel.send("Vous avez perdu... Vous avez misé un " + args[1] + " mais avez obtenu un " + nombregagnant + "! Vous perdez alors " + args[2] + " :grapes:.");
            raisins[message.author.id] = raisins[message.author.id] - args[2];
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          break;

        case "6":
          var nombregagnant = Math.floor(Math.random() * 11);
          var gain = Number(args[2]) * 10;
          if (nombregagnant === 0) {
            message.channel.send("Vous avez réussi! Vous avez obtenu un " + nombregagnant + " et décuplez donc votre mise! Vous obtenez alors " + gain + " :grapes:!");
            raisins[message.author.id] = raisins[message.author.id] + gain;
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          else {
            message.channel.send("Vous avez perdu... Vous avez misé un " + args[1] + " mais avez obtenu un " + nombregagnant + "! Vous perdez alors " + args[2] + " :grapes:.");
            raisins[message.author.id] = raisins[message.author.id] - args[2];
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          break;

        case "7":
          var nombregagnant = Math.floor(Math.random() * 11);
          var gain = Number(args[2]) * 10;
          if (nombregagnant === 0) {
            message.channel.send("Vous avez réussi! Vous avez obtenu un " + nombregagnant + " et décuplez donc votre mise! Vous obtenez alors " + gain + " :grapes:!");
            raisins[message.author.id] = raisins[message.author.id] + gain;
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          else {
            message.channel.send("Vous avez perdu... Vous avez misé un " + args[1] + " mais avez obtenu un " + nombregagnant + "! Vous perdez alors " + args[2] + " :grapes:.");
            raisins[message.author.id] = raisins[message.author.id] - args[2];
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          break;

        case "8":
          var nombregagnant = Math.floor(Math.random() * 11);
          var gain = Number(args[2]) * 10;
          if (nombregagnant === 0) {
            message.channel.send("Vous avez réussi! Vous avez obtenu un " + nombregagnant + " et décuplez donc votre mise! Vous obtenez alors " + gain + " :grapes:!");
            raisins[message.author.id] = raisins[message.author.id] + gain;
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          else {
            message.channel.send("Vous avez perdu... Vous avez misé un " + args[1] + " mais avez obtenu un " + nombregagnant + "! Vous perdez alors " + args[2] + " :grapes:.");
            raisins[message.author.id] = raisins[message.author.id] - args[2];
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          break;

        case "9":
          var nombregagnant = Math.floor(Math.random() * 11);
          var gain = Number(args[2]) * 10;
          if (nombregagnant === 0) {
            message.channel.send("Vous avez réussi! Vous avez obtenu un " + nombregagnant + " et décuplez donc votre mise! Vous obtenez alors " + gain + " :grapes:!");
            raisins[message.author.id] = raisins[message.author.id] + gain;
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          else {
            message.channel.send("Vous avez perdu... Vous avez misé un " + args[1] + " mais avez obtenu un " + nombregagnant + "! Vous perdez alors " + args[2] + " :grapes:.");
            raisins[message.author.id] = raisins[message.author.id] - args[2];
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          break;

        case "10":
          var nombregagnant = Math.floor(Math.random() * 11);
          var gain = Number(args[2]) * 10;
          if (nombregagnant === 0) {
            message.channel.send("Vous avez réussi! Vous avez obtenu un " + nombregagnant + " et décuplez donc votre mise! Vous obtenez alors " + gain + " :grapes:!");
            raisins[message.author.id] = raisins[message.author.id] + gain;
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          else {
            message.channel.send("Vous avez perdu... Vous avez misé un " + args[1] + " mais avez obtenu un " + nombregagnant + "! Vous perdez alors " + args[2] + " :grapes:.");
            raisins[message.author.id] = raisins[message.author.id] - args[2];
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          break;

        case "rouge"://0 = rouge, et 1 = noir
          var nombregagnant = Math.floor(Math.random() * 2);
          var gain = Number(args[2] * 2);
          if (nombregagnant === 0) {
            message.channel.send("Vous avez gagné! Vous avez parié sur le " + args[1] + " et avez obtenu  du " + args[1] + "! Vous doublez alors votre mise, et gagnez alors " + gain + " :grapes:!");
            raisins[message.author.id] = raisins[message.author.id] + gain;
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          else {
            message.channel.send("Vous avez perdu... Vous avez parié sur le " + args[1] + " et avez obtenu du noir! Vous perdez alors votre mise, c'est à dire " + args[2] + " :grapes:!");
            raisins[message.author.id] = raisins[message.author.id] - args[2];
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          break;

        case "noir"://0 = rouge, et 1 = noir
          var nombregagnant = Math.floor(Math.random() * 2);
          var gain = Number(args[2] * 2);
          if (nombregagnant === 0) {
            message.channel.send("Vous avez gagné! Vous avez parié sur le " + args[1] + " et avez obtenu  du " + args[1] + "! Vous doublez alors votre mise, et gagnez alors " + gain + " :grapes:!");
            raisins[message.author.id] = raisins[message.author.id] + gain;
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          else {
            message.channel.send("Vous avez perdu... Vous avez parié sur le " + args[1] + " et avez obtenu du rouge! Vous perdez alors votre mise, c'est à dire " + args[2] + " :grapes:!");
            raisins[message.author.id] = raisins[message.author.id] - args[2];
            fs.writeFile("./raisins.json", JSON.stringify(raisins), (err) => {
              if (err) console.error(err)
            });
          }
          break;

        default:
          message.channel.send("La commande semble avoir été utilisée incorrectement. Désolée, mais je ne peut pas la comprendre: veuillez vérifier son utilisation avec la commande `" + config.prefix + "help " + config.prefix + "roulette`.");
          break;
      }
      break;

    default: //au cas où la commande n'est pas reconnue
      message.channel.send("Cette commande n'existe pas... Faites `" + config.prefix + "help` pour connaître la liste des commandes disponibles.");
      break;
  }
});

bot.login(config.token);

bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
bot.on("debug", (e) => console.info(e));

bot.on("ready", () => {
  console.log("I am ready!");
  bot.user.setGame(config.prefix + "help for commands");
});
