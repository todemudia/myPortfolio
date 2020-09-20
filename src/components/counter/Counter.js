import React, { useState } from 'react';

const ViewPlate = (props) => (
    <>
        <h1>{props.value}</h1>
    </>
)

const Counter = () => {
    const [value, setValue] = useState(0);
    return (
        <div>
            <ViewPlate value={value}/>
            <button
                onClick={() => setValue(value+1)}>
                +1
            </button>
            <button
                onClick={() => setValue(value-1)}>
                -1
            </button>
        </div>
    )
}

export default Counter
