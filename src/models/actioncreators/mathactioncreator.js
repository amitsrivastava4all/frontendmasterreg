export const mathActionCreator=(firstNumber, secondNumber, opr)=>{
    return {
        payload:{firstNumber, secondNumber},
        type:opr
    };
}