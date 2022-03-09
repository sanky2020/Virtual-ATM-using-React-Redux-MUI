export const depositMoney = (amount) =>{
    return (dispatch)=>{
        dispatch({
            type: 'DEPOSIT',
            payload: amount,
            date : new Date().toDateString(),
            time : new Date().toLocaleTimeString()

        })
    }
}
export const withdrawMoney = (amount) =>{
    return (dispatch)=>{
        dispatch({
            type: 'WITHDRAW',
            payload: amount,
            date : new Date().toDateString(),
            time : new Date().toLocaleTimeString()
        })
    }
}
