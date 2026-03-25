import React, { useEffect } from 'react'

function Time() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        setInterval(() => {
            setCount((prev)=>prev+1)
        },1000)
    })
  return (
    <>
      <div>timer: {count}</div>
    </>
  )
}

export default Time
