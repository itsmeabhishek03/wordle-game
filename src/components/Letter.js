import React, {useContext} from 'react';

import { AppContext } from '../App';

const Letter = ({letterPos , attempValue}) => {
    const {board , correctword , attempt} = useContext(AppContext);
    const letter = board[attempValue][letterPos]
    const right = correctword.toUpperCase()[letterPos] === letter;
    const halfRight = !right && letter !== " " && correctword.toUpperCase().includes(letter);
    const colorid = attempt.attemptval > attempValue && (right ? "right" : halfRight? "halfRight": "wrong")  
    
  return (
    <div>
      <div className="letter" id={colorid}>{letter}</div>
    </div>
  )
}

export default Letter
