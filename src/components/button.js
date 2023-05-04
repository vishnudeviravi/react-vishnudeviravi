import styles from "./button.module.css";

const Button = props => {
  return (
    <button className={styles.btn} onClick={() => props.onBtnClick(props.name)}>
      {props.name}
    </button>
  );
};

export default Button;
