import React from "react";
import Link from "next/link";
// import { useRouter } from 'next/router'

// import productsApi from '../api/productsApi'

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(
    `https://filter-project-salvation27.vercel.app/api/products/${id}`
  );
  const data = await res.json();
  return {
    props: { product: data },
  };
};

const Product = ({ product }) => {
  const { name,category,tehnologies,git,host,source} = product;

  return (
    <div className="container">
    <Link className='home_link' style={{cursor:'pointer'}} href='/'><h3>Go Home Page</h3></Link>
      <div className="product_detail_wrap">
        <div className="product_detail_name">{name}</div>
        <div className="product_detail_cat">category: {category}</div>
        <div className="product_detail_cat tehnologies">tehnologies: {tehnologies}</div>
{
  git.length > 4 ? (
    <div className="product_detail_link git_link">     
            <Link href={git}>
              <a target='_blank'>Git link</a>
            </Link>
         </div>
  ) : 'не залит на гит'
}

    {
      host.length > 4 ? (
    <div className="product_detail_link git_link">     
            <Link href={host}>
              <a target='_blank'>Go Progect</a>
            </Link>
         </div>
  ) : 'не залит на гит'
}    

{
  source.length > 4 ? (
    <div className="product_detail_link git_link">     
            <Link href={source}>
              <a target='_blank'>Sourse</a>
            </Link>
         </div>
  ) : 'Empty'
} 
      
       
      </div>
    </div>
  );
};

export default Product;
