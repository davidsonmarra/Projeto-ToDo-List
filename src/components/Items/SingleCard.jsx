import React, { useEffect, useState } from 'react';
import Check from "../Svgs/Check";
import Delete from '../Svgs/Delete';
import { useSelector } from "react-redux";
import { Card, Title, Text, Categories, UserOptions, Colors } from './styles';

export default function SingleCard({item, index, dispatch, allItems}) {

  const [checkboxIsCheck, setCheckboxIsCheck] = useState(false);
  const hideTasksDone = useSelector((state) => state.hide);

  useEffect(() => {
    // eslint-disable-next-line
    localStorage.getItem(`@check_${item.title+index}`) == "true" 
    ? setCheckboxIsCheck(true)
    : setCheckboxIsCheck(false);
  }, [])

  useEffect(() => {
    localStorage.setItem("@check_"+item.title+index, checkboxIsCheck);
  }, [checkboxIsCheck])
  
  function handleCheckbox() {
    setCheckboxIsCheck(!checkboxIsCheck);
  } 

  function handleDelete() {
    setCheckboxIsCheck(false);
    localStorage.removeItem(`@check_${item.title+index}`);
    let filtredItems = allItems.filter(it => it.title !== item.title);
    dispatch({type: 'REMOVE_ITEM', payload: filtredItems})
  }
  
  return (
    <Card hideTasksDone={hideTasksDone} checkboxIsCheck={checkboxIsCheck}>
      <div>
        <Title checkboxIsCheck={checkboxIsCheck}>{item.title}</Title>
        <Text checkboxIsCheck={checkboxIsCheck}>{item.text}</Text>
      </div>
      <div className="footer">
        <Categories>{item.categories.map((ct, i) => 
          <Colors color={ct.color}></Colors>
        )}
        </Categories>
        <UserOptions>
          <label htmlFor={item.title + index} onClick={handleCheckbox} >
            <div className={checkboxIsCheck ? "checkbox checked" : "checkbox"} checkboxIsCheck={checkboxIsCheck}>
              <Check />
            </div>
          </label>
          <input type="checkbox" name={item.title + index} id={item.title + index} /> 
          <Delete className="delete" onClick={handleDelete} />
        </UserOptions>
      </div>

    </Card>
  );
}