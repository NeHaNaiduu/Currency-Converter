import { useState } from 'react'
import './App.css'
import Input from './Input.jsx'
import useCurrency from './useCurr.jsx'

function App() {

  const[amount,setAmount]=useState(0)
  const[from,setFrom]=useState("usd")
  const[to,setTo]=useState("inr")
  const[converted,setConverted]=useState(0)

  const currencyInfo=useCurrency(from)
  
  const opts=Object.keys(currencyInfo)

  const handleSwap=()=>{
    setFrom(to)
    setTo(from)
    setAmount(converted)
    setConverted(amount)
  }

  const convert=()=>{setConverted(amount*currencyInfo[to])}
  
  return (
    <div className='flex flex-col items-center justify-center'>

      <h1 className='text-white text-5xl font-bold text-center p-10'>Currency Converter</h1>
      
      <div className='bg-gray-400 p-10'>
        <form 
        onSubmit={(e)=>{
          e.preventDefault()
          convert()}}>
          
          <Input 
          label="From" 
          amount={amount} 
          currencyOptions={opts} 
          onCurrencyChange={(currency)=>setAmount(amount)} selectCurrency={from} 
          onAmountChange={(amount)=>setAmount(amount)}/>
          
          <button 
          type='button' 
          className='bg-blue-500 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 py-2 px-4 hover:bg-white hover:text-black'
          onClick={handleSwap}>Swap</button>
          
          <Input 
          label="To" 
          amount={converted} 
          currencyOptions={opts} 
          onCurrencyChange={(currency)=>setTo(currency)} 
          selectCurrency={to} 
          amountDisable/>
          
          <button 
          type='submit'
          className='bg-red-600 text-white font-bold py-4 px-5 
          shadow-2xl hover:bg-blue-600'>Convert</button>
        
        </form>
      </div>
    </div>
  )
}

export default App
