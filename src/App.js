import { createContext ,useState , useEffect } from 'react';
import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import {DefaultBoard , generateWordSet} from './Words';
import Gameover from './components/Gameover'

export const AppContext = createContext();

function App() {
  const [board , setBoard] = useState(DefaultBoard);
  const [attempt , setAttempt] = useState({attemptval:0 , letterpos:0})
  const [wordSet, setWordSet] = useState(new Set())
  const [correctword, setcorrectword] = useState("");
  const [gameOver, setGameOver] = useState({
     gameover: false,
     guessedWord: false
  });

  const onselectLetter = (keyVal) => {
    if(attempt.letterpos > 4) return;
          const newBoard = [...board]
          newBoard[attempt.attemptval][attempt.letterpos] = keyVal;
          setBoard(newBoard)
          setAttempt({attemptval: attempt.attemptval,letterpos:attempt.letterpos + 1})
  }
  
  const onDeleteLetter = () => {
    
    if(attempt.letterpos === 0) return;
          const newBoard = [...board]
          newBoard[attempt.attemptval][attempt.letterpos-1] = "";
          setBoard(newBoard)
          setAttempt({...attempt,letterpos:attempt.letterpos - 1})
  }
  
  const onEnter = () => {

    console.log(gameOver);
    
    if(attempt.letterpos !== 5) return;
    console.log(correctword);
     let currWord = "";
     for(let i=0 ; i<5 ; i++){
       currWord += board[attempt.attemptval][i];
     }
     
     if (currWord.toLowerCase() === correctword.toLowerCase()) {
      setGameOver({ gameover:true, guessedWord: true });
      
      return;
    }
    if(wordSet.has(currWord.toLowerCase())){
     setAttempt({attemptval:attempt.attemptval + 1,letterpos:0});
     }
    else{
      alert("Word not Valid")
    }

   
     if (attempt.attemptval === 5) {
       setGameOver({ gameover: true, guessedWord: false });
       

       return;
    
    }
  }  
 

useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setcorrectword(words.todaysWord);
      
    });
  }, []);

  

  return (
   <div className='app'>
    <div className='heading'>
      <nav>
        <h1> Wordle</h1>
      </nav>
    </div>
    <div className="main">
      <AppContext.Provider value={{ 
        board ,
        setBoard ,
        attempt ,
        setAttempt, onDeleteLetter 
        ,onEnter, onselectLetter,correctword,gameOver }}  >
         <div className="game">
           <Board/>
            {gameOver.gameover ? <Gameover/> : <Keyboard/>}
         </div> 
      </AppContext.Provider> 
    </div>
   </div>

  );
}

export default App;
