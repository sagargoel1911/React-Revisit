import React from 'react'

function Input(props) {
    function inputHandler(event){
        props.onSet(event.target.value)
    }
    console.log("rerender");
  return (
    <div>
    <input type="text" onInput={inputHandler}/>
    </div>
  )
}

export default Input