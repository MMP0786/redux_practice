const initialState = {
    noOfCars:[
        {
            name: "wagnor",
            id: 1,
          },
          {
            name: "scorpio",
            id: 2,
          },
          {
            name: "verna",
            id: 3,
          },
    ]
}

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Buy_car":
      console.log("buy", state.noOfCars);
      return {
        ...state,
        noOfCars: state.noOfCars.filter((ele) => 
        ele.id !== action.payload),
      };
    case "Sell_car":
      console.log("sell", state.noOfCars);
      return { ...state, noOfCars: state.noOfCars - 1 };
    default:
      return { ...state };
  }
};
