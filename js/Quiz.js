class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide()
    //write code to change the background color here
    background("Orange")
    //write code to show a heading for showing the result of Quiz
    fill("Blue")
    textSize(18)
    text("Result of Quiz",340,50)
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
     var display_Answers = 230;
    debugger;
    //write code to add a note here
    text("NOTE: Person who is highlighted in green is correct!",130,230)
    }
    //write code to highlight contest who answered correctly
    for(var player in allContestants){
      debugger;
      var correctAnswer = "1"
      if(correctAnswer === allContestants[player].answer){
        
        display_Answers+=20
        
        fill("Green")
        textSize(20);
        text(allContestants[player].name + ": " + allContestants[player].answer, 250,display_Answers)
      }
      else{

      display_Answers+=20
        fill("Red")
        
        textSize(20);
        text(allContestants[player].name + ": " + allContestants[player].answer, 250,display_Answers)
      }
    }
  }

}
