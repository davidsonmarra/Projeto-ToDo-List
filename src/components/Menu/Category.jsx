import React, { useState, useEffect } from "react";
import { CategoryContent } from "./styles";
import { useSelector, useDispatch } from "react-redux";
export default function Category({color, ct}) {
  
  const categoriesCurent = useSelector((state) => state.categories);
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("t")
    setIsSelected(false);
  }, [categoriesCurent])

  useEffect(() => {
    if(isSelected)
      dispatch({type: 'ADD_SELECTED_CATEGORY', payload: ct});
    else {
      dispatch({type: 'REMOVE_SELECTED_CATEGORY', payload: ct.title});
    }
  }, [isSelected]);

  function handleSelected() {
    setIsSelected(!isSelected);
  }

  return (
    <CategoryContent onClick={handleSelected} color={color} isSelected={isSelected} >
      <div/>
      <span>{ct.title}</span>
    </CategoryContent>
  );
}

