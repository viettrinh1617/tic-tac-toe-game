import React from 'react'

function History({history, move, setStepNumber}) {
  return (
    <>
        <h4>
            History
        </h4>
        <ul>
            {history.map((step,index) => (
                <li key = {index}>
                    <button onClick={(event)=>{setStepNumber(index)}}> {index ? `Move to move #${index}` : "Go to Game Start"}
                    </button>
                </li>
            ))
            }
        </ul>
    </>
  )
}

export default History