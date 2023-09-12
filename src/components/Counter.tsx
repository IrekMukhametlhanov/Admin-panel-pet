import React, { useState } from 'react'
import classes from './counter.module.scss'
export const Counter = () => {
  const [count, setCount] = useState<number>(0)
  

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div onClick={increment} className={classes.FUCK}>{count}</div>
  )
}

