import Die from './components/Die.jsx'
import { useState } from "react"

export default function App() {

  function getArrObj() {
    const arrOfNums = Array.from({ length: 10 }, () => ({ value: Math.ceil(Math.random() * 6), isHeld: false }));
    return arrOfNums;
  }

  // state of an array of objects that holds 2 values: (value, isHeld)
  const [numbers, setNumbers] = useState(getArrObj())

  function reRoll() {
    setNumbers(numbers.map((entry) => (
      entry.isHeld == true ? entry : {...entry, value : Math.ceil(Math.random() * 6)}
    )))
  }

  const buttons = numbers.map((obj, index) => {
    return (
      <Die 
        obj={obj}
        key={index}
        id ={index}
        hold = {hold}
      />
    )
  })

  function hold(index){
    console.log("my id is " + index + " " + numbers.length)

    setNumbers(prev => numbers.map((value,ind) => (
      (index == ind) ? {...value, isHeld : !value.isHeld} : value
    )))

  }

  return (
    <main>
      <section>
        {buttons}
      </section>

      <button className='roll' onClick={reRoll}>ROLL</button>
    </main>
  )
}

/*
  Create a button
  onClick of this button => setNumbers(getRandNums)

*/