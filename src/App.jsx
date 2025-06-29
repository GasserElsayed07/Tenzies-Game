import Die from './components/Die.jsx'
import { useState } from "react"
import { useEffect } from "react"

export default function App() {
  // state of an array of objects that holds 2 values: (value, isHeld)
  const [objects, setObjects] = useState(getArrObj())
  const [won, setWon] = useState(false)

  function getArrObj() {
    const arrOfNums = Array.from({ length: 10 }, () => ({ value: Math.ceil(Math.random() * 6), isHeld: false }));
    return arrOfNums;
  }

  const buttons = objects.map((obj, index) => {
    return (
      <Die
        obj={obj}
        key={index}
        id={index}
        hold={hold}
        checkWin={checkWin}
      />
    )
  })

  function reRoll() {
    setObjects(objects.map((entry) => (
      entry.isHeld == true ? entry : { ...entry, value: Math.ceil(Math.random() * 6) }
    )))
  }


  function hold(index) {
    // console.log("my id is " + index + " " + Objects.length)

    setObjects(prev => objects.map((value, ind) => (
      (index == ind) ? { ...value, isHeld: !value.isHeld } : value
    )))
    
    console.log("hold function executed!")
    checkWin();
  }

  function checkHold() {
    return objects.every(element => element.isHeld === true);
  }

  function checkWin() {
    if (checkHold() == true) {
      const num = objects[0].value;
      for (let index = 1; index < 10; index++) {
        if (objects[index].value != num) {
          console.log(`Checking index ${index}: value=${objects[index].value}, target=${num}`);
          setWon(false)
          return;
        }
        else if (objects[index].isHeld != true) {
          console.log(`button is not held ${index}: value=${objects[index].value}`)
          setWon(false)
          return;
        }
        else {
          console.log("non of the conditions were met");
        }

      }
      setWon(true);
      console.log("user WON!" + won)
      return;
    }
    else {setWon(false)}
  }

  useEffect(() => {
  checkWin();
}, [objects]);

  return (
    <main>

      {won && <h1>You Won!</h1>}

      <section>
        {buttons}
      </section>

      <button className='roll' onClick={reRoll}>{won ? "NEW GAME" : "ROLL"}</button>
    </main>
  )
}

/*
  Create a button
  onClick of this button => setObjects(getRandNums)
  -DONE-
*/