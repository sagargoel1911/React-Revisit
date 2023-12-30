import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
        let formValidity=true;
        for(var id in state.inputs){
            if(!state.inputs[id]) continue;
            if(id===action.inputId){
                formValidity=(formValidity && action.inputIsValid);
            }
            else{
                formValidity=(formValidity && state.inputs[id].isValid);
            }
        }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.inputValue,isValid: action.inputIsValid }
        },
        isValid: formValidity
      };
    default:
      return state;
  }
};

function useForm(initialInputs, initialFormValidity) {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });
  const inputHandler=useCallback((id, value, isValid)=> {
    dispatch({
      type: "CHANGE",
      inputId: id,
      inputValue: value,
      inputIsValid: isValid,
    });
  },[]);
  return { formState, inputHandler };
}

export default useForm;
