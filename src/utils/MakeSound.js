import Audios from "./Audios";

let makeSound = (key) => {
   switch (key) {
      case "a":
         var crash = new Audio(Audios[0]);
         crash.play();
         break;

      case "s":
         var kick = new Audio(Audios[1]);
         kick.play();
         break;

      case "d":
         var snare = new Audio(Audios[2]);
         snare.play();
         break;

      case "f":
         var tom1 = new Audio(Audios[3]);
         tom1.play();
         break;

      case "j":
         var tom2 = new Audio(Audios[4]);
         tom2.play();
         break;

      case "k":
         var tom3 = new Audio(Audios[5]);
         tom3.play();
         break;

      case "l":
         var tom4 = new Audio(Audios[6]);
         tom4.play();
         break;

      default:
         break;
   }
}

export default makeSound;