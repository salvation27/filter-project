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
  const { name,category,tehnologies,git} = product;

  return (
    <div className="container">
      <div className="product_detail_wrap">
        <div className="product_detail_name">{name}</div>
        <div className="product_detail_cat">category: {category}</div>
        <div className="product_detail_cat tehnologies">tehnologies: {tehnologies}</div>
        <div className="product_detail_link git_link">
        
<Link href={git}>
<a target='_blank'>
Git link
</a>
</Link>
         </div>
        <div className="product_detail_link host_link">tehnologies: {tehnologies}</div>
        <div className="product_detail_link source_link">tehnologies: {tehnologies}</div>
      </div>
    </div>
  );
};

export default Product;
