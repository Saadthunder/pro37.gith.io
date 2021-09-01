class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder", "Enter your name..");
   //Create a input box to enter the number
   this.input2 = createInput("").attribute("placeholder", "Enter correct option no..");
   

    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    
    
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.position(150, 40);
    this.option1.html("1: Everyone " );
    this.option1.position(150, 70);
    this.option2.html("2: Envelope" );
    this.option2.position(150, 90);
    this.option3.html("3: Estimate " );
    this.option3.position(150, 110);
    this.option4.html("4: Example" );
    this.option4.position(150, 130);
    

    this.input1.position(120, 180);
    this.input2.position(330, 180);
    this.button.position(270, 205);

    this.button.mousePressed(()=>{
      
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}
