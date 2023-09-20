import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { addToCart, removeFromCart, checkout,checkData } from './redux/reducers/cartSlice';
import { increment, decrement } from './redux/reducers/counterSlice';
import { useEffect } from 'react';
import { getUser } from './redux/reducers/userSlice';

function App() {
  const myState = useSelector((state) => state.counterReducer);
  const myCartState = useSelector((state) => state.cartReducer);
  const myUserState = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getUser())
  },[dispatch]);

  console.log(myUserState.users);

  return (
    <div className="flexbox">
      <div className="container">
        Redux Tutorial!
      </div>
      <div className="counter-board">
        <button className="plus" onClick={() => dispatch(increment())}>+</button>
        <input className='counter' type="quantity" placeholder="Value" value={myState.count} />
        <button className="minus" onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div className='button-groups'>
        <button className='add-cart' onClick={() => dispatch(addToCart())}>Add to Cart</button>
        <button className='remove-cart' onClick={() => dispatch(removeFromCart())}>Remove from Cart</button>
        <button className='checkout' onClick={() => dispatch(checkout())}>Checkout</button>
      </div>
      <div className='state-check'>
        <input className='last-state' type='text' value={myCartState.cartState} />
        <input className='last-state' type='textbox' onKeyDown={(event) => {
          if (event.key === 'Enter') dispatch(checkData(event.target.value))
        }} />
      </div>
      <div>
        <p>{myCartState.enteredState}</p>
      </div>
    </div>
  );
}

export default App;
