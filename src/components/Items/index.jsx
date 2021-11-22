import React, { useState } from "react";
import SingleCard from "./SingleCard";
import { Container } from './styles';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";


export default function Item() {
  const allItems = useSelector((state) => state.items);
  let dispatch = useDispatch();
  const [items, setItems] = useState(allItems);

  useEffect(() => {
    if(JSON.parse(localStorage.getItem("@todo_items"))) {
      const savedItems = JSON.parse(localStorage.getItem("@todo_items"));
      dispatch({type: "INITIALIZE_ITEMS", payload: savedItems});
    }
  }, []);

  useEffect(() => {
    if(allItems !== null) {
      localStorage.setItem("@todo_items", JSON.stringify(allItems));
      setItems(allItems);
    }
  }, [allItems]);

  return (
    <Container>
      {items.map((item, i) => 
        <SingleCard 
          key={i} 
          index={i} 
          item={item}
          dispatch={dispatch}
          allItems={allItems}
        />
      )}
    </Container>
  );
}