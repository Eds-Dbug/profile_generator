const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question("What's your name? Nicknames are also acceptable", (name) => {
  rl.question("What's an activity you like doing?", (activity) => {
    rl.question("What do you listen to while doing that?", (listen) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (meal) => {
        rl.question("What's your favourite thing to eat for that meal?", (food) => {
          rl.question("Which sport is your absolute favourite?", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (power) => {

              console.log(`Your name is ${name}, your favourite activity is ${activity}, you like to listen to ${listen}. Your favourite meal is ${meal} and your fav food is ${food}. You r favourite sport is ${sport} and you superpower is ${power}.`)
              rl.close();
            })
          })
        })
      })
    })
  })

  
});

/**
 * 
    
    
    
    
    
    
  

 */
