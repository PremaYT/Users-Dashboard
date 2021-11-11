import React, { useState, useRef, useEffect } from 'react'

function UseRefExample() {
    const [count, setCount] = useState(0)
    const timerRef = useRef()
    const inputref = useRef()

    const startTimer = () => {
        if(timerRef.current) return;
        timerRef.current = setInterval(() => {
            setCount(c => c+1);
        }, 1000)
    }

    const stopTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = 0
    }

    const resetTimer = () => {
        setCount(0)
        clearInterval(timerRef.current)
        timerRef.current = 0
    }

    useEffect(() => {
        inputref.current.focus()
    }, [])

    return (
        <div>
            <h1>Timer - { count } </h1>
            <button onClick={startTimer}>Start Timer</button>
            <button onClick={stopTimer}>Stop Watch</button>
            <button onClick={resetTimer}>Reset</button>
            <input type="text" ref={inputref} />
        </div>
    )
}

export default UseRefExample
