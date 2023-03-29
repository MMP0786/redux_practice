import React from 'react'

export function Buy(id) {
  return (
    {
        type:"Buy_car",
        payload: id
    }
  )
}


export function Sell() {
  return (
    {
        type:"Sell_car"
    }
  )
}
