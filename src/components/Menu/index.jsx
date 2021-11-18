import React, { useState, useEffect } from "react";
import NewCategoryModal from "../NewCategoryModal";
import Category from "./Category";
import { Container } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import Add from "../Svgs/Add";
import Delete from "../Svgs/Delete";
import Hide from "../Svgs/Hide";
import Show from "../Svgs/Show"

export default function Menu(){

  const allCategories = useSelector((state) => state.categories);
  const selectedCategories = useSelector((state) => state.selected);
  const hideTasksDone = useSelector((state) => state.hide);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState(allCategories);
  const [isOpenNewCategoryModal, setIsOpenNewCategoryModal] = useState(false); 

  useEffect(() => {
    if(localStorage.getItem("@todo_categories")) {
      const savedCategories = JSON.parse(localStorage.getItem("@todo_categories"));
      dispatch({type: "INITIALIZE_CATEGORIES", payload: savedCategories});
    }
  }, []);
  
  useEffect(() => {
    if(allCategories) {
      localStorage.setItem("@todo_categories", JSON.stringify(allCategories));
      setCategories(allCategories);
    }
  }, [allCategories]);

  function handleOpenNewCategoryModal() {
    setIsOpenNewCategoryModal(true);
  }

  function handleDelete() {    
    dispatch({type: "INITIALIZE_CATEGORIES", payload: categories.filter(ct => !selectedCategories.some(sct => ct.title === sct.title))});
    // setCategories(categories.filter(ct => !selectedCategories.some(sct => ct.title === sct.title)))
  }

  function handleHideTaksDone() {
    if(hideTasksDone) 
      dispatch({type: "HIDE"});
    else 
      dispatch({type: "SHOW"});
  }

  return (
    <Container checkboxIsCheck={hideTasksDone}>
      <ul>
        <div>
          {categories !== null ? categories.map((ct, i) => 
            <Category key={i} ct={ct} color={ct.color} />
          ) : ""}
        </div>
        <div className="category-container">
          <div className="user-actions">
            <Add onClick={handleOpenNewCategoryModal} className="button-add"/>
            <Delete className="delete" onClick={handleDelete} />
          </div>
            <div onClick={handleHideTaksDone} className="hide-tasks">
              {hideTasksDone ? <Show /> : <Hide />}
            </div>
        </div>
        <NewCategoryModal setIsOpenNewCategoryModal={setIsOpenNewCategoryModal} isOpenNewCategoryModal={isOpenNewCategoryModal} />
      </ul>
      <img alt="Gif todo" src="./assets/giphy.gif" width="150" height="150" />
    </Container>
    
  );
}