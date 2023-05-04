import styles from "@/styles/simplecalc.module.css";
import Input from "@/components/Input";
import Button from "@/components/button";
import { useState } from "react";

const Calculator = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [result, setResult] = useState(0);

  const firstHandleChange = e => {
    setFirstValue(Number(e.target.value));
  };

  const secondHandleChange = e => {
    setSecondValue(Number(e.target.value));
  };

  const onPlusButtonClick = () => {
    setResult(firstValue + secondValue);
  };
  const onMinusButtonClick = () => {
    setResult(firstValue - secondValue);
  };
  const onMultiplyButtonClick = () => {
    setResult(firstValue * secondValue);
  };

  const onDivideButtonClick = () => {
    setResult(firstValue / secondValue);
  };

  const onBtnClick = name => {
    if (name == "+") {
      setResult(firstValue + secondValue);
    } else if (name == "-") {
      setResult(firstValue - secondValue);
    } else if (name == "X") {
      setResult(firstValue * secondValue);
    } else {
      setResult(firstValue / secondValue);
    }
  };
  return (
    <div className={styles.simpleCalc}>
      <h1 className={styles.calcHead}>Calculator</h1>
      <div className={styles.inputBox}>
        <Input onHandleChange={firstHandleChange} />
        <Input onHandleChange={secondHandleChange} />
      </div>
      <div className={styles.btnBox}>
        <Button name="+" onBtnClick={onBtnClick} />
        <Button name="-" onBtnClick={onBtnClick} />
        <Button name="X" onBtnClick={onBtnClick} />
        <Button name="/" onBtnClick={onBtnClick} />
      </div>
      <h1 className={styles.calcHead}>{result}</h1>
    </div>
  );
};

export default Calculator;
