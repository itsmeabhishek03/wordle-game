import React,{useContext} from 'react';
import { AppContext } from '../App';

const Key = ({keyVal}) => {
    const {onDeleteLetter ,onEnter ,onselectLetter , gameOver} = useContext(AppContext);

    const selectLetter = () =>{
      if(gameOver.gameover) return;
      if(keyVal === "ENTER"){
          onEnter();
      }
      else if(keyVal === "DELETE"){
        onDeleteLetter();
      }
      else{
         onselectLetter(keyVal);
      }
    }  
    
  return (
    <div>
      <div className="key" onClick={selectLetter}>{ keyVal}</div>
    </div>
  )
}

export default Key
