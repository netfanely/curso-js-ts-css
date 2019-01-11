var Greeter = (  function(){
        function Greeter(message){
        this.greeting = message;
  }
  Greeter.prototype.greet=   function(){
        return "hola, "+this.greeting;
  };
  return Greeter;
}());

var greeter = new Greeter("mundo");
var button = document.createElement("button");
//var button = document.createElement('button');
//var t = window.document.createTextNode("CLICK ME");
//btn.appendChild(t);

button.textContent=" Saludar ";
button.OnClick =    function(){
        alert(greeter.greet());
    };
document.body.appendChild(button);
