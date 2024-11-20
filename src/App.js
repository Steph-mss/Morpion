import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import TicTacToe from "./compenent/TicTacToe/tictactoe";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<TicTacToe />} />
      </Routes>
    </div>
  );
}

export default App;
