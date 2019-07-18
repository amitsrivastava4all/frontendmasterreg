export const ActionCreator = (operName,fno,sno)=>{
    return dispatch=>{
        setTimeout(()=>{
            console.log("Timeout Called....");
            dispatch({
                type:operName,
                payload:
                {
                    firstNumber:fno,
                    secondNumber:sno
                }
            });
        },3000);
    }
}
