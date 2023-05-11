import styles from "./product.module.css";

const ProductCard = props => {
  return (
    <div className={styles.productCard}>
      <img className={styles.productImage} src={props.image} />
      <div className={styles.price}>
        <p>Rs {props.price}</p>
        <p>Discount {props.discount}%</p>
      </div>
      <h3 className={styles.heading}>{props.title}</h3>
      <div className={styles.brand}>
        <p>{props.brand}</p>
        <p>{props.category}</p>
        <p>{props.rating}</p>
      </div>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
};

export default ProductCard;
