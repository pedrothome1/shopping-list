import React, { useState, useEffect } from 'react';
import ShoppingListView from './shopping-list-view';

let nextId = 1;

export default function ShoppingListContainer() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const data = window.localStorage.getItem('data');

    if (!data) {
      return;
    }

    const parsed = JSON.parse(data);

    nextId = parsed.nextId;
    setItems(parsed.items);
  }, []);

  function persist(items) {
    const data = { items, nextId };
    window.localStorage.setItem('data', JSON.stringify(data));
  }

  function handleItemAddition(itemName) {
    const name = itemName.trim();

    if (name === '') {
      return;
    }

    const updatedItems = items.concat({
      id: nextId++,
      name,
      quantity: 1,
    });

    persist(updatedItems);
    setItems(updatedItems);
  }

  function handleItemDeletion() {
    const selectedCopy = selected.slice();
    const updatedItems = items.filter(item => !selectedCopy.includes(item.id));

    persist(updatedItems);

    setSelected([]);
    setItems(updatedItems);
  }

  function handleItemQuantityChange(item, newQuantity) {
    item.quantity = newQuantity;

    const updatedItems = items.slice();

    persist(updatedItems);
    setItems(updatedItems);
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
