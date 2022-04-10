import React from "react";
// import { useRouter } from 'next/router'

// import productsApi from '../api/productsApi'

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(
    `https://test-deploy-next-two.vercel.app/api/products/${id}`
  );
  const data = await res.json();
  return {
    props: { product: data },
  };
};

const Product = ({ product }) => {
  const { name,category,tehnologies} = product;

  return (
    <div className="container">
      <div className="product_detail_wrap">
        <div className="product_detail_name">{name}</div>
        <div className="product_detail_cat">category: {category}</div>
        <div className="product_detail_cat tehnologies">tehnologies: {tehnologies}</div>
      </div>
    </div>
  );
};

export default Product;
