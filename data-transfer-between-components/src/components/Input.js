import React from 'react'

function Input(props) {
    function inputHandler(event){
        props.onSet(event.target.value)
    }
  return (
    <div>
    <input type="text" onInput={inputHandler}/>
    </div>
  )
}

export default Input