import React from 'react'
import Letter from './Letter'

const Board = () => {
  
  return (
    <div>
      <div className="board">
        <div className="row">
            <Letter letterPos={0} attempValue={0}/>
            <Letter letterPos={1} attempValue={0}/>
            <Letter letterPos={2} attempValue={0}/>
            <Letter letterPos={3} attempValue={0}/>
            <Letter letterPos={4} attempValue={0}/>
        </div>
        <div className="row">
           <Letter letterPos={0} attempValue={1}/>
           <Letter letterPos={1} attempValue={1}/>
           <Letter letterPos={2} attempValue={1}/>
           <Letter letterPos={3} attempValue={1}/>
           <Letter letterPos={4} attempValue={1}/>
        </div>
        <div className="row">
           <Letter letterPos={0} attempValue={2}/>
           <Letter letterPos={1} attempValue={2}/>
           <Letter letterPos={2} attempValue={2}/>
           <Letter letterPos={3} attempValue={2}/>
           <Letter letterPos={4} attempValue={2}/>
        </div>
        <div className="row">
           <Letter letterPos={0} attempValue={3}/>
           <Letter letterPos={1} attempValue={3}/>
           <Letter letterPos={2} attempValue={3}/>
           <Letter letterPos={3} attempValue={3}/>
           <Letter letterPos={4} attempValue={3}/>
        </div>
        <div className="row">
           <Letter letterPos={0} attempValue={4}/>
           <Letter letterPos={1} attempValue={4}/>
           <Letter letterPos={2} attempValue={4}/>
           <Letter letterPos={3} attempValue={4}/>
           <Letter letterPos={4} attempValue={4}/>
        </div>
        <div className="row">
           <Letter letterPos={0} attempValue={5}/>
           <Letter letterPos={1} attempValue={5}/>
           <Letter letterPos={2} attempValue={5}/>
           <Letter letterPos={3} attempValue={5}/>
           <Letter letterPos={4} attempValue={5}/>
        </div>
      </div>
    </div>
  )
}

export default Board
