import React from 'react'
import { Button } from '@nextui-org/react';
const CatBtn = ({cat,handleSelectCat,clerCateg,categ}) => {
  return (
    <>
    <div className="filter_cat_title">
      по категориям:
    </div>
   <Button.Group color="gradient" ghost className='btn_cat_wrap'>
    <Button   className={categ ===null  ? 'btnActive': ''} value='' onClick={()=>clerCateg()}>all</Button>
        {
        cat.map((item,i)=><Button key={i}  className={categ ===item ? 'btnActive': ''} value={item} onClick={(e)=>handleSelectCat(e.target.parentNode.value)}>{item}</Button>)
        }  
    </Button.Group>
    </>
 
  )
}

export default CatBtn