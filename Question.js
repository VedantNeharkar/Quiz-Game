class Question{
    constructor()
    {
        this.title = createElement('h1') this.input1 = createInput("Enter Your Name Here...."); this.input2 = createInput("Enter Correct Option No.."); this.button = createButton('Submit'); this.question = createElement('h3'); this.option1 = createElement('h4'); this.option2 = createElement('h4'); this.option3 = createElement('h4'); this.option4 = createElement('h4');
        
    }

}
display(){
    this.title.html("My Quizzie Game");
    this.title.position(350,0);
    
    this.question.html("Question:- What starts with 'E' and also end with it but only has 1 letter?");
    this.question.position(150,80);
    this.option.html("1: Everyone");
    this.option.position(150,100);
    this.option2.htiml("2: Envelope");
    this.option2.position(150,120);
    
    this.input.position(150,230);
}

