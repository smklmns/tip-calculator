import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

const Result = () => {
  const {
    action,
    dispatch
  } = useContext(AppContext)

  return (
    <div className="resultBox rounded-xl pt-9 pb-6 px-7 flex justify-between flex-col">

      <div className="h-2/4">
        <div className='flex justify-between mb-6'>
          <div>
            <p className='text-white'>Tip Amount</p>
            <p className='person'>/ person</p>
          </div>
          <p className="sum text-3xl font-bold">{action.price && action.people && action.percentageState ? "$"+action.tip : "$0.00"}</p>
        </div>
        <div className='flex justify-between'>
          <div>
            <p className='text-white'>Total</p>
            <p className='person'>/ person</p>
          </div>
          <p className='sum text-3xl font-bold'>{action.price && action.people && action.percentageState ? "$"+action.sum : "$0.00"}</p>
        </div>
      </div>
    <button 
      onClick={() => {
        dispatch({type: 'setPrice', payload: ''})
        dispatch({type: 'setPeople', payload: ''})
        dispatch({type: 'setPercentageState', payload: ''})
        dispatch({type: 'setCustomPercentage', payload: ''})
        dispatch({type: 'setTip', paylod: "$0.00"})
        dispatch({type: 'setSum', paylod: "$0.00"})
      }}
      className={action.price && action.people && action.percentageState ? "activeResetB" : "resetB"}>RESET</button>
    </div>
  )
}

export default Result