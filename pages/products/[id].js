import React from 'react'
// import { useRouter } from 'next/router'

// import productsApi from '../api/productsApi'


export  const  getServerSideProps = async (context) => {
  const {id} =  context.params
  const res = await fetch(`${process.env.API_HOST}/products/${id}`);
  const data = await res.json();
  return {
    props:{product:data}
  };
}



const Product = ({product}) => {

  const {name,price} = product

  return (
    <div className='product_item'>
      <div className="product_item_name">{name}</div>
      <div className="product_item_price">{price}</div>
    </div>
  )
}

export default Product