$(document).ready(function() {
  let bot = new RiveScript();

  let $user_submit_rive = $("#user_input_submit_submit");
  let $user_input_rive = $("#user_input_input");
  let $output_div = $("#chat_bot_conversation_display_div");

  let files = ([
      '/static/rs/about-aiden.rive',
      '/static/rs/begin.rive',
      '/static/rs/chat_bot.rive',
      '/static/rs/data-names.rive',
      '/static/rs/emoji-categories.rive',
      '/static/rs/emoji-sub.rive',
      '/static/rs/emoji.rive',
      '/static/rs/sarcasm.rive',
      '/static/rs/std-arrays.rive',
      '/static/rs/std-chat.rive',
      '/static/rs/std-chat.rive',
      '/static/rs/std-learn.rive',
      '/static/rs/std-reductions.rive',
      '/static/rs/std-salutations.rive',
      '/static/rs/std-star.rive',
      '/static/rs/std-substitutions.rive'
  ])

  bot
    .loadFile(files)
    .then(loading_done)
    .catch(loading_error);

  function loading_done() {
    bot.sortReplies();
    console.log("Bot has finished loading!");
  }

  function loading_error(error) {
    console.error("There was an error: " + error);
  }

  //   bot.reply("local-user", "Hello, Bot").then(function(reply) {
  //     console.log("The bot says: " + reply);
  //   });

  // Click function to submit 
  $user_submit_rive.click(function(){
      $user_submit_rive.submit();
  })

  // Function to submit on hitting enter key
  $user_input_rive.keypress(function(event){
      if (event.which == 13 && !event.shiftKey) {
        event.preventDefault();
        $user_submit_rive.submit();
      }
  });
  
  // Submit Function
  $user_submit_rive.submit(function() {
    chat();
    $user_input_rive.val('');
    scroll_to_bottom()
  });

  function scroll_to_bottom() {
    $output_div.scrollTop($output_div[0].scrollHeight);
}

  function chat() {
    let input = $user_input_rive.val();
    $output_div.append("<p><strong>You:</strong> " + input + "</p>" + "\n");
    scroll_to_bottom()

    if (input.length <= 10) {
      setTimeout(append_reply, 2000);
    } else if (input.length == 11 || input.length <= 20) {
      setTimeout(append_reply, 3000);
    } else if (input.length == 21 || input.length <= 30) {
      setTimeout(append_reply, 4000);
    } else if (input.length == 31 || input.length <= 40) {
      setTimeout(append_reply, 5000);
    } else if (input.length == 41 || input.length <= 50) {
      setTimeout(append_reply, 6000);
    } else {
      setTimeout(append_reply, 7000);
    }

    function append_reply() {
      let bot_reply = bot.reply("local-user", input).then(function(reply) {
        $output_div.append(
          "<p><strong>Sarsour And Brown:</strong> " + reply + "</p>" + "\n"
        );
        scroll_to_bottom()
      });
    }

  }
});
