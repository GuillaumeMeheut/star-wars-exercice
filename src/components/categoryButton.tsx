import styles from "./categoryButton.module.css";
import { FunctionComponent } from "react";

type Props = {
  value: string;
  text: string;
  onChange: (v: any) => any;
};

export const CategoryButton: FunctionComponent<Props> = ({
  value,
  text,
  onChange,
}) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.button}
        type="radio"
        id={value}
        name="category"
        value={value}
        onChange={(ev) => onChange(ev.target.value)}
      />
      <label htmlFor={value}>{text}</label>
    </div>
  );
};
