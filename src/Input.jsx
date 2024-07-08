import React from 'react'

function Input({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false
    }) {
  return (
    <div className='flex bg-gray-500 p-4 my-3 items-center justify-center'>
        <div className='flex flex-col'>
            <label htmlFor="field">{label}</label>
            <input 
            type="number" 
            id='field'
            placeholder='Amount'
            disabled={amountDisable}
            value={amount}
            onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
            className='p-3 mr-4'/>
        </div>
        <div className='flex flex-col'>
            <label htmlFor="type">Currency Type</label>
            <select 
            name="" 
            className='p-3'
            id="type" 
            value={selectCurrency}
            onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisable}>
                {currencyOptions.map((curr)=>(
                    <option key={curr} value={curr}>{curr}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default Input