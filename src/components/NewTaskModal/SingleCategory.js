import React, { useEffect, useState } from 'react';

import { ContainerCategory, CategoryCheck, Ball } from './styles';

export default function SingleCategory({category, setCategory, categoryCurent}) {

  const [isCheck, setIsCheck] = useState(false);

  function handleCheck() {
    setIsCheck(!isCheck);
  }

  useEffect(() => {
    let removeCategory
    if(isCheck === true)
     setCategory([...categoryCurent, category]);
    else {
      removeCategory = categoryCurent.filter(ct => ct.title !== category.title);
      setCategory(removeCategory)
    }
  }, [isCheck])

  return (
    <ContainerCategory>
      <input className="check-category" type="checkbox" id={category.title} value={category.title} /> 
      <CategoryCheck onClick={handleCheck} isCheck={isCheck} htmlFor={category.title}>
        <Ball color={category.color} />
        {category.title}
      </CategoryCheck>
    </ContainerCategory>
  );
}