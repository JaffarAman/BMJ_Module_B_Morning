const counterPlusAction = (value) => {
    
    return (dispatch)=>{
        dispatch({
            type: "COUNTER_PLUS",
            payload: value,
          });
    }
    
    
};

const counterMinusAction = (value)=>{
        return (dispatch)=>{
            dispatch({
                type : "COUNTER_MINUS" ,
                payload: value
            })
        }
}



export { counterPlusAction  , counterMinusAction};
