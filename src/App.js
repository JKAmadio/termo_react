import React from "react"

function App() {
  const numberOfLetters = [1, 2, 3, 4, 5];

  return (
    <div>
      {numberOfLetters.map((letter,index) => {
        return <div key={index}>{letter}</div>
      })}
    </div>
  );
}

export default App;
