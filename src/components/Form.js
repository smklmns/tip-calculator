import { useContext} from 'react'
import { AppContext } from '../App'


const Form = () => {

  const {
    price,
    setPrice, 
    people, 
    setPeople, 
    percantageState,
    setPercantageState, 
    customPercantage,
    setCustomPercantage
  } = useContext(AppContext)

  const numbers = [5, 10, 15, 25, 50]

    
  return (
    <form onSubmit={e => e.preventDefault()} className='font-bold'>
      <div className='flex items-center justify-between'>
        <label htmlFor="billInput">Bill</label>
        <span style={{color: "red", fontSize: "0.775rem"}}>{!price && percantageState && people ? "Can't be zero" : ""}</span>
      </div>
      <input 
        className='py-1.5 pr-4 text-end rounded-md' 
        style={!price && percantageState && people ? {border: "2px solid red"} : {}}
        type="number" 
        id="billInput" 
        placeholder='0'
        value={price}
        onChange={(e) => e.target.value > 0 ? setPrice(e.target.value) : setPrice(e.target.value.replace(/[^1-9]/, ""))}
        onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
      />
      <div className='mt-7'>
        <p >Select Tip %</p>
        <div className='percantageBox grid sm:grid-cols-3 gap-3 mb-7 mt-3'>
          {numbers.map(item => {
            return (
              <button
                key={item}
                className={item === percantageState ? "chosenPercantage" : ""}
                onClick={e => {
                  setCustomPercantage("")
                  return setPercantageState(item)
                }}
              >{item}%</button>
            )
          })}
          <input
            className="customB px-2 mt-0"
            type="number"
            placeholder='Custom'
            value={customPercantage}
            onKeyDown={(evt) => ["e", "E", "+", "-", "."].includes(evt.key) && evt.preventDefault()}
            onChange={e => {
             if(e.target.value > 0 && e.target.value <= 100) {
              setPercantageState(e.target.value)
              setCustomPercantage(e.target.value)
             } else if(e.target.value <= 0) {
              setPercantageState(e.target.value.replace(/[^1-9]/, ""))
              setCustomPercantage(e.target.value.replace(/[^1-9]/, ""))
              }
            }}
          />
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <label htmlFor="numberOfPeopleInput">Number of People</label>
        <span style={{color: "red", fontSize: "0.775rem"}}>{!people && percantageState && price ? "Can't be zero" : ""}</span>
      </div>
      <input 
        className='py-1.5 pr-4 text-end rounded-md' 
        style={!people && percantageState && price ? {border: "2px solid red"} : {}}
        type="number" 
        id="numberOfPeopleInput" 
        placeholder='0'
        value={people}
        onChange={e => e.target.value > 0 ? setPeople(e.target.value) : setPeople(e.target.value.replace(/[^1-9]/, ""))}
        onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
      />
    </form>
  )
}

export default Form
