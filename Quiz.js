class Quiz{
    constructor();
}
getState();


update();

asyncstart();

function asyncstart(){
    if(gameState === 0){
        contestant = new Contestant();
        var constestantCountRef = await database.ref('contestantCount').once("value");
        if(constestantCountRef.exist()) {
            contestantCount = contestantCountRef.val();
            contestant.getCount();

        }
        question = new Question();
        question.display();


        }    
    }

    