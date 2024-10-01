import styles from "../styles/styles.module.css";
import useProduct from "../hooks/useProduct";
// import noImage from "../assets/no-image.jpg";
const ProductCard = () => {
  const { counter, handleCounter } = useProduct();

  return (
    <div className={styles.productCard}>
      <img
        src="./coffee-mug.png"
        alt="coffe mug"
        className={styles.productImg}
      />
      {/* <img src={noImage} alt="no image" className={styles.productImg} /> */}

      <span className={styles.productDescription}>Coffe Mug</span>

      <div className={styles.buttonsContainer}>
        <button
          className={styles.buttonMinus}
          onClick={() => handleCounter("minus")}
        >
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button
          className={styles.buttonAdd}
          onClick={() => handleCounter("add")}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
