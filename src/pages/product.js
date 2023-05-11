import styles from "@/styles/product.module.css";
import ProductCard from "@/components/ProductCard";
import { useState, useEffect } from "react";

const Product = () => {
  const [product, setproduct] = useState([]);

  const fetchProduct = async () => {
    const result = await fetch("https://dummyjson.com/products");
    const convertedData = await result.json();
    console.log("convertedData", convertedData);
    const data = convertedData.products;
    setproduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className={styles.product}>
      <h1 className={styles.heading}>Product</h1>
      <div className={styles.productContainer}>
        {product.map(item => (
          <ProductCard
            title={item.title}
            description={item.description}
            brand={item.brand}
            category={item.category}
            rating={item.rating}
            image={item.thumbnail}
            price={item.price}
            discount={item.discountPercentage}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
