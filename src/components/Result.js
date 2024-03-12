import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

const Result = () => {
  const {
    price,
    setPrice, 
    people, 
    setPeople, 
    percantageState, 
    setPercantageState, 
    tip,
    sum,
    setTip,
    setSum,
    setCustomPercantage
  } = useContext(AppContext)

  return (
    <div className="resultBox rounded-xl pt-9 pb-6 px-7 flex justify-between flex-col">

      <div className="h-2/4">
        <div className='flex justify-between mb-6'>
          <div>
            <p className='text-white'>Tip Amount</p>
            <p className='person'>/ person</p>
          </div>
          <p className="sum text-3xl font-bold">{price && people && percantageState ? "$"+tip : "$0.00"}</p>
        </div>
        <div className='flex justify-between'>
          <div>
            <p className='text-white'>Total</p>
            <p className='person'>/ person</p>
          </div>
          <p className='sum text-3xl font-bold'>{price && people && percantageState ? "$"+sum : "$0.00"}</p>
        </div>
      </div>
    <button 
      onClick={() => {
        setPrice("")
        setPeople("")
        setPercantageState(0)
        setCustomPercantage("")
        setTip("$0.00")
        setSum("$0.00")
      }}
      className={price && people && percantageState ? "activeResetB" : "resetB"}>RESET</button>
    </div>
  )
}

export default Result