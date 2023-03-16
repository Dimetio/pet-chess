import { useEffect, useState } from "react";
import "./App.css";
import BoardComponent from "./components/board/board";
import Info from "./components/info/Info";
import { Board } from "./models/Board";
import { Colors } from "./models/Colors";
import { Player } from "./models/Player";

function App() {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setCurrentPlayer(whitePlayer);
    setBoard(newBoard);
  }

  function swapPlayer() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    );
  }

  return (
    <div className="app">
      <div className="wrapper">
        <BoardComponent
          board={board}
          setBoard={setBoard}
          swapPlayer={swapPlayer}
          currentPlayer={currentPlayer}
        />

        <Info board={board} restart={restart} currentPlayer={currentPlayer} />
      </div>
    </div>
  );
}

export default App;
