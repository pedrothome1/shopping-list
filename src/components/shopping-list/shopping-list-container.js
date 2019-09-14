import React, { useState } from 'react';
import ShoppingListView from './shopping-list-view';

let nextId = 1;

export default function ShoppingListContainer() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState([]);

  function handleItemAddition(itemName) {
    const updatedItems = items.concat({
      id: nextId++,
      name: itemName,
      quantity: 1,
    });

    setItems(updatedItems);
  }

  function handleItemDeletion() {
    const selectedCopy = selected.slice();

    setSelected([]);
    setItems(items.filter(item => !selectedCopy.includes(item.id)));
  }

  function handleItemQuantityChange(item, newQuantity) {
    item.quantity = newQuantity;
    setItems(items.slice());
  }

  const showDeleteButton = selected.length > 0;

  return (
    <ShoppingListView
      items={items}
      selected={selected}
      showDeleteButton={showDeleteButton}
      onItemQuantityChange={handleItemQuantityChange}
      onItemsSelection={setSelected}
      onAdd={handleItemAddition}
      onDelete={handleItemDeletion}
    />
  );
}
