import { useContext} from 'react'
import { AppContext } from '../App'


const Form = () => {

  const {
    action,
    dispatch
  } = useContext(AppContext)

  const numbers = [5, 10, 15, 25, 50]

    
  return (
    <form onSubmit={e => e.preventDefault()} className='font-bold'>
      <div className='flex items-center justify-between'>
        <label htmlFor="billInput">Bill</label>
        <span style={{color: "red", fontSize: "0.775rem"}}>{!action.price && action.percentageState && action.people ? "Can't be zero" : ""}</span>
      </div>
      <input 
        className='py-1.5 pr-4 text-end rounded-md' 
        style={!action.price && action.percentageState && action.people ? {border: "2px solid red"} : {}}
        type="number" 
        id="billInput" 
        placeholder='0'
        value={action.price}
        onChange={(e) => e.target.value > 0 ? dispatch({type: 'setPrice', payload: e.target.value}) : dispatch({type: 'setPrice', payload: e.target.value.replace(/[^1-9]/, "")})}
        onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
      />
      <div className='mt-7'>
        <p >Select Tip %</p>
        <div className='percantageBox grid sm:grid-cols-3 gap-3 mb-7 mt-3'>
          {numbers.map(item => {
            return (
              <button
                key={item}
                className={item === action.percentageState ? "chosenPercantage" : ""}
                onClick={e => {
                  dispatch({type: 'setCustomPercentage', pososi: ''})
                  dispatch({type: 'setPercentageState', payload: item})
                }}
              >{item}%</button>
            )
          })}
          <input
            className="customB px-2 mt-0"
            type="number"
            placeholder='Custom'
            value={action.customPercentage}
            onKeyDown={(evt) => ["e", "E", "+", "-", "."].includes(evt.key) && evt.preventDefault()}
            onChange={e => {
             if(e.target.value > 0 && e.target.value <= 100) {
              dispatch({type: 'setPercentageState', payload: e.target.value})
              dispatch({type: 'setCustomPercentage', payload: e.target.value})
             } else if(e.target.value <= 0) {
              dispatch({type: 'setPercentageState', payload: e.target.value.replace(/[^1-9]/, "")})
              dispatch({type: 'setCustomPercentage', payload: e.target.value.replace(/[^1-9]/, "")})
              }
            }}
          />
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <label htmlFor="numberOfPeopleInput">Number of People</label>
        <span style={{color: "red", fontSize: "0.775rem"}}>{!action.people && action.percentageState && action.price ? "Can't be zero" : ""}</span>
      </div>
      <input 
        className='py-1.5 pr-4 text-end rounded-md' 
        style={!action.people && action.percentageState && action.price ? {border: "2px solid red"} : {}}
        type="number" 
        id="numberOfPeopleInput" 
        placeholder='0'
        value={action.people}
        onChange={e => e.target.value > 0 ? dispatch({type: 'setPeople', payload: e.target.value}) : dispatch({type: 'setPeople', payload: e.target.value.replace(/[^1-9]/, "")})}
        onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
      />
    </form>
  )
}

export default Form
