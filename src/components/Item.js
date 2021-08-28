import React from 'react';

function Item({ item, handleAdd }) {
  return (
    <div className="item">
      <img className="item_img" src={item.img} alt={item.name}></img>
      <span className={"item_name"}>{item.name}</span>
      <span className={"item_price"}>{item.price}</span>
      <button className="item_button" onClick={() => { handleAdd(item.id) }}>장바구니 담기</button>
    </div>
  );
}

export default Item;