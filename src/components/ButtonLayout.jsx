import React, { useRef } from "react";
import makeSound from "../utils/MakeSound";

function ButtonLayout(props) {
   let buttons = useRef("");

   let handleClick = () => {
      let button = buttons.current.innerText;
      makeSound(button);
      buttonAnimation(button);
   }
   let handleKey = (e) => {
      let key = e.key;
      makeSound(key);
      buttonAnimation(key);
   }
   let buttonAnimation = (key) => {
      var active = document.querySelector("." + key);
      active.classList.add("pressed");
      setTimeout(() => {
         active.classList.remove("pressed");
      }, 100);
   }

   return (
      <button ref={buttons} onClick={handleClick} onKeyDown={handleKey} className={`text-6xl leading-loose font-black text-pink-700 inline-block w-32 h-32 sm:w-40 sm:h-40 text-center m-2 bg-white border-8 border-slate-500 rounded-md outline-none shadow-xl transition-all duration-100 ${props.name} ${props.background}`}> {props.name}</button>
   )
}

export default ButtonLayout;