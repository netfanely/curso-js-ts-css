//window.addEventListener('load', Question, Quiz, false);
// ..... or
//window.addEventListener('DOMContentLoaded', yourFunction, false);
(function(){
    var body = var body = window.document.getElementsByTagName("body")[0];

    function Question(question, choices, correctAns) {
        this.question = question;
        this.choices = choices;
        this.correctAns = correctAns;
    }

    Question.prototype.checkAns = function(givenAns){
        if (this.correctAns === givenAns) {
            console.log("OK");
        }
    };

    function Quiz() {
        this.questions = [];
    }

    Quiz.prototype.showAllQuestions = function(){
        this.questions.forEach(function(questions){
            console.log(questions.question);
        });
    };

    Quiz.prototype.showQuiz = function(){
        this.questions.forEach(function(questions){

            for (var i=0; i < questions.choices.length; i+=1) {
                body.innerHTML("OK");
            }
