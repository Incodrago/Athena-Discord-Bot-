const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
let raisins = JSON.parse(fs.readFileSync("./raisins.json", "utf8"));

var ouiounon = ["Oui.", "Non.", "Nope!", "Absolument!", "Je n'en serais pas si sûre..", "Probablement?", "Probablement pas.", "P'tet.", "Essaye!", "Je n'en sais rien..", "fucc u", "M'en fous."];
var gifs = ["https://cdn.discordapp.com/attachments/213157139412287489/332842255528230912/abandonthread.gif",
            "http://media.riffsy.com/images/95404e9b2c58432208ed26e7872fdece/tenor.gif",
            "http://media.riffsy.com/images/f3e0c94d0edb87158727b3391a99bf8b/tenor.gif",
            "http://media.riffsy.com/images/a7d36e2601fba9406f44493dfe00b8cf/tenor.gif",
            "http://media.riffsy.com/images/91e83cd653e4fe0b1474a66e88dbf091/tenor.gif",
            "https://68.media.tumblr.com/c5baaf418e7cc8427b45b96abcf0e830/tumblr_o6o349CSHw1tmvxxdo1_400.gif",
            "https://68.media.tumblr.com/00b28a5aba0e0099c776a1c818fc04e3/tumblr_inline_o68qb2X1Iy1tj4w1o_540.gif",
            "http://pa1.narvii.com/6089/68f3b698b7f233046c08cc21ce3525bb15ef84b7_hq.gif",
            "http://pa1.narvii.com/6184/1aedeb8c997d32a24514e572ebe292bb11e19d96_hq.gif"];

bot.on("message", (message) => {
  if(!message.content.startsWith(config.prefix) || message.author.bot) return;

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
              .addField("\n\n**Description: **", "\n\nJe répèterais tout ce que vous me dites de dire!\nSi vous rajoutez le mot clé \"delete\" à la fin de votre message, j'effacerais votre message et le fait que vous m'ayez demandé de dire ça passera inaperçu :wink:")
              .addField("\n\n**Utilisation: **", "\n\n`" + config.prefix + "say Dites ici ce que vous voulez que je répète!`\n ou \n`" + config.prefix + "say Dites ici ce que vous voulez que je dise! delete`");
            message.channel.send({embed: helpsayembed});
            break;

          case config.prefix + "getuserid":
            var helpgetuseridembed = new Discord.RichEmbed()
              .setColor(0xFF6600)
              .setDescription("`" + config.prefix + "getuserid`")
              .addField("\n\n**Description: **", "\nVous donne votre ID d'utilisateur. Si vous mentionnez quelqu'un, vous obtiendrez son ID d'utilisateur.")
              .addField("\n\n**Utilisation: ** ", "\n`" + config.prefix + "getuserid`\n ou \n`" + config.prefix + "getuserid @mention`");
            message.channel.send({embed: helpgetuseridembed});
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
              .addField("\n\n**Description: **", "\nSI vous utilisez cette commande, je vous répondrai avec un message supportif! :hearts:\nSi vous sentez le besoin d'utiliser cette commande, s'il vous plait, parlez-en à quelqu'un et ne vous confiez pas qu'à moi...")
              .addField("\n\n**Utilisation: **", "\n`" + config.prefix +"ihaveacripplingdepression`");
            message.channel.send({embed: helpdepressionembed});
            break;

          default:
            message.channel.send("Je ne reconnais pas cette commande. N'oubliez pas d'utiliser le prefixe " + config.prefix + " avant la commande.");
            break;

        }
      }
      else {
        var helpembed = new Discord.RichEmbed()
          .addField("Liste des commandes:", "`" + config.prefix + "help`,\n`" + config.prefix + "ping`,\n`" + config.prefix + "roll`,\n`" + config.prefix + "8ball`,\n`"
                    + config.prefix + "info`,\n`" + config.prefix + "getavatar`,\n`" + config.prefix + "say`,\n`" + config.prefix + "getuserid`,\n`" + config.prefix +
                    "myraisins`,\n`" + config.prefix + "giveraisins`,\n`" + config.prefix + "betflip`,\n`" + config.prefix + "embed`,\n`" + config.prefix + "gif`,\n`"
                    + config.prefix + "ihaveacripplingdepression`.")
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
      if (args[args.length - 1] == "delete") {
        mess = mess.replace(args[args.length - 1], "");
        message.delete();
        message.channel.send(mess);
      } else message.channel.send(mess);
      break;

    case "getuserid": //pour obtenir l'ID d'un utilisateur, si pas d'arguments alors id de l'auteur du message
      if (!args[1]) message.channel.send(message.author.id);
      else {
        var mentionneduser = message.mentions.users.first();
        message.channel.send(mentionneduser.id);
      }
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

    case "mysuperhackingcommand":
      if (message.author.id === config.ownerid) {
        message.member.addRole(message.guild.roles.find("name", "Rocker"));
        message.channel.send("Ok!");
      } else return;
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
