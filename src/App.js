import Form from "./components/Form";
import Result from "./components/Result";
import { useState, createContext, useEffect } from 'react'

export const AppContext = createContext()

function App() {
  let [price, setPrice] = useState("")
  let [people, setPeople] = useState("")
  let [percantageState, setPercantageState] = useState()
  let [customPercantage, setCustomPercantage] = useState("")
  let [tip, setTip] = useState()
  let [sum, setSum] = useState()

  useEffect(() => {
    tipPerPerson()
    sumPerPerson()
  })

  const tipPerPerson = () => {
    let calc = (Number(price * percantageState) / 100) / Number(people)
    setTip(calc.toFixed(2))
  }

  const sumPerPerson = () => {
    let calc = (Number(price * percantageState) / 100 + Number(price)) / Number(people)
    setSum(calc.toFixed(2))
  }

  return (
    <div className="App">
      <h1 className="text-center sm:mb-20 font-bold tracking-widest sm:text-2xl">SPLI<br />
        TTER</h1>
      <main className="bg-white sm:rounded-3xl grid sm:grid-cols-2 sm:gap-x-6 p-6">
        <AppContext.Provider 
          value={{
            price,
            setPrice, 
            people, 
            setPeople, 
            percantageState, 
            setPercantageState, 
            tipPerPerson, 
            sumPerPerson,
            tip,
            setTip,
            sum,
            setSum,
            customPercantage,
            setCustomPercantage
          }}
        >
        <Form />
        <Result />
        </AppContext.Provider>
      </main>
    </div>
  );
}

export default App;
