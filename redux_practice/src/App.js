import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { store } from './component/Store';
import { Sell } from './Action';

function App() {
 const selector= useSelector(store=> store.noOfCar)
 const dispatch = useDispatch()
 
 const handleBuy = ()=>{
  return (
    dispatch({
      type: "Buy_car"
    })
  )
 }
 const handleSell = ()=>{
  return (
    dispatch(Sell())
  )
 }
  return (
    <div className="App">
      <p>Item's are here</p>
      {selector}
      <button onClick={handleBuy}>Buy</button>
      <button onClick={handleSell}>Sell</button>
    </div>
  );
}

export default App;
