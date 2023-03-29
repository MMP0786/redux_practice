const initialState ={
    noOfCars: 50
}

export const carReducer = (state=initialState, action)=>{
    switch(action.type){
        case "Buy_car":
            console.log("buy", state.noOfCars)
            return {...state, noOfCars:state.noOfCars+1}
        case "Sell_car":
            console.log("sell", state.noOfCars)
            return {...state, noOfCars:state.noOfCars-1}
        default:
            return {...state}
    }
}