import Die from './components/Die.jsx'
import {useState} from "react"
export default function App(){

  function getRandNum(){
    const arrOfNums = Array.from({ length: 10 }, () => Math.ceil(Math.random() * 6));
    return arrOfNums;
  }

  const [numbers, setNumbers] = useState(getRandNum())

  console.log(numbers)

  const buttons = numbers.map((entry,index) => {
    return (
      <Die value = {entry}
        key = {index}
      />
    )
  })

  return(
    <main>
      <section>
        {buttons}
      </section>
    </main>
  )
}