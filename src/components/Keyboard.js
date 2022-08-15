import React, {useContext,useCallback ,useEffect} from 'react'
import Key from './Key';
import { AppContext } from '../App';

const Keyboard = () => {

  const key1 = ["Q","W","E","R","T","Y","U","I","O","P"];
  const key2 = ["A","S","D","F","G","H","J","K","L"]
  const key3 = ["Z","X","C","V","B","N","M"]
  const {onDeleteLetter , onEnter ,onselectLetter ,gameOver ,attempt} = useContext(AppContext);

  const handleKeyboard = useCallback((event) => {
    if (gameOver.gameover) return;
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDeleteLetter();
      } else {
        key1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onselectLetter(key);
          }
        });
        key2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onselectLetter(key);
          }
        });
        key3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onselectLetter(key);
          }
        });
      }
    },
   [attempt] 
  );
  useEffect(() => {
     document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
     };
   }, [handleKeyboard]);

  return (

   <div className="keyboard" onKeyDown={handleKeyboard}>
       <div className="line1">
        {key1.map((key) => {
          return (<Key keyVal = {key}/>)
        })}
       </div>
       <div className="line2">
        {key2.map((key) => {
          return (<Key keyVal = {key}/>)
        })}
       </div>
       <div className="line3">
        <div className="big-btn">{<Key keyVal={"ENTER"}/>}</div>
        {key3.map((key) => {
          return (<Key keyVal = {key}/>)
         })}
        <div className='big-btn'>{<Key keyVal={"DELETE"}/>}</div>
       </div>
       
   </div>
  )
}

export default Keyboard;
