import React, {useReducer,useEffect} from 'react'
function inputReducer(state,action){
    switch(action.type){
      case "TOUCH": {
        return {
          ...state,
          isTouched: true
        };
      }
      case "CHANGE":{
        return {
          ...state,
          value: action.value,
          isValid:action.value.trim().length>0
        }
      }
      default: return state; 
    }
  }
function Input(props) {
    const [inputState, dispatch] = useReducer(inputReducer,{
        value:"",
        isTouched: false,
        isValid: false
      });
      const { id, onInput } = props;
  const { value, isValid } = inputState;
  useEffect(() => {
    onInput( id,value, isValid);//inputHandler function (in form-hook) is called
  }, [ id,value, isValid, onInput]);

      function touchHandler(){
        dispatch({
          type:"TOUCH",
        })
      }
      function changeHandler(event){
        dispatch({
          type:"CHANGE",
          value:event.target.value
        })
      }
  return (
    <div>
    <input value={inputState.value} onChange={changeHandler} onBlur={touchHandler}/>
    {inputState.isTouched && !inputState.isValid && <>Input {id} not given</>}
    </div>
  )
}

export default Input