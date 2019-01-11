class Saluda{
  greeting: string;
  constructor(message:string){
    this.greeting=message;
  }
  greet(){
    return "hello, "+ this.greeting;
  }
}
let greeter = new Saluda("world");
let button = document.createElement('button');
button.textContent="Dice Hola";
button.onClick = function(){
  alert(greeter.greet());
}
document.body.appendChild(button);
