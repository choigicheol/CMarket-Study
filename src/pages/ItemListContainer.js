import React from 'react';
import Item from '../components/Item';

function ItemListContainer({ items, handleAdd }) {
  return (
    <div id="item_list_container">
      <div id="item_list_body">
        <div id="item_list_title">쓸모 없는 선물 모음</div>
        {items.map((item, idx) => <Item item={item} key={idx} handleAdd={()=>{handleAdd(item.id)}} />)}
      </div>
    </div>
  );
}

export default ItemListContainer;