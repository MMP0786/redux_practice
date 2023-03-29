import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { store } from './component/Store';
import { Buy, Sell } from './Action';

function App() {
 const selector1= useSelector(store=> store.noOfCars)
 const dispatch = useDispatch()
 
 const handleBuy = (id)=>{
  console.log("first")
  return (
    dispatch(Buy(id))
  )
 }
 const handleSell = ()=>{
  return (
    dispatch(Sell())
  )
 }
 console.log(selector1)
  return (
    <div className="App">
      <p>Item's are here</p>
      {selector1.map((ele)=> {
        return(
          <div key={ele.id}>
              <div >{ele.name}</div>
              <br></br>
             <button onClick={()=>handleBuy(ele.id)}>Buy</button>
          </div>
        )
      })}
      <button onClick={handleSell}>Sell</button>
    </div>
  );
}

export default App;
