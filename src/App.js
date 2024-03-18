import Form from "./components/Form";
import Result from "./components/Result";
import {createContext, useEffect, useReducer } from 'react'

export const AppContext = createContext()

const reducer = (state, action) => {
  switch(action.type) {
    case 'setPrice':
      return {...state, price: action.payload}
    case 'setPeople':
      return {...state, people: action.payload}
    case 'setPercentageState':
      return {...state, percentageState: action.payload} 
    case 'setCustomPercentage':
      return {...state, customPercentage: action.payload}
    case 'setTip':
      return {...state, tip: action.payload}
    case 'setSum':
      return {...state, sum: action.payload}
    default:
      throw new Error()
  }
}

function App() {
  const [action, dispatch] = useReducer(reducer, {price: '', people: '', percentageState: '', customPercentage: '', tip: '', sum: ''})


  useEffect(() => {
    tipPerPerson()
    sumPerPerson()
  })

  const tipPerPerson = () => {
    let calc = (Number(action.price * action.percentageState) / 100) / Number(action.people)
    dispatch({type: 'setTip', payload: calc.toFixed(2)})
  }

  const sumPerPerson = () => {
    let calc = (Number(action.price * action.percentageState) / 100 + Number(action.price)) / Number(action.people)
    dispatch({type: 'setSum', payload: calc.toFixed(2)})
  }

  return (
    <div className="App">
      <h1 className="text-center sm:mb-20 font-bold tracking-widest sm:text-2xl">SPLI<br />
        TTER</h1>
      <main className="bg-white sm:rounded-3xl grid sm:grid-cols-2 sm:gap-x-6 p-6">
        <AppContext.Provider 
          value={{
            action,
            dispatch
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
