import React from 'react'
import { Button } from '@nextui-org/react';
const CatBtn = ({cat,handleSelectCat,clerCateg,categ}) => {
  return (
    <Button.Group color="gradient" ghost>
    <Button   className={categ ===null  ? 'btnActive': ''} value='' onClick={()=>clerCateg()}>all</Button>
        {
        cat.map((item,i)=><Button key={i}  className={categ ===item ? 'btnActive': ''} value={item} onClick={(e)=>handleSelectCat(e.target.parentNode.value)}>{item}</Button>)
        }  
    </Button.Group>
  )
}

export default CatBtn