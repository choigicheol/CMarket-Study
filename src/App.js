import './App.css';
import ItemListContainer from './pages/ItemListContainer'
import { initialState } from './assets/state';
import { useState } from 'react';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  const [items, setItems] = useState(initialState.items);
  const [cartItems, setCartItems] = useState(initialState.cartItems);

  const addToCart = (itemId) => {
    console.log(itemId)
    setCartItems(
      [
        ...cartItems,
        {
          "itemId": itemId,
          "quantity": 1
        }
      ]
    )
  }

  const removeFromCart = (itemId) => {
    // SetCartItems(cartItems.filter(item => item.itemId !== itemId))
  }

  const setQuantity = () => {

  }


  return (
    <>
      <ItemListContainer items={items} handleAdd={addToCart} />
      {console.log(items)}
      <h1>'테스트테스트'</h1>
      <ShoppingCart cartItems={cartItems}/>
    </>
  );
}

export default App;
