$(document).ready(function(){
   var bot = new Rivescript();

   var file = 'sarsourandbrown/static/rs/chat_bot.rive'
   
   bot.loadFile(file)
   .then(loading_done)
   .catch(loading_error);

   function loading_done(){
       console.log("Bot has finished loading!")
   }
asdfasdf
   bot.sortReplies();
})