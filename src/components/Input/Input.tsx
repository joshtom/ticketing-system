import { useState, ReactElement } from "react";
import { useField } from "formik";
import styles from "./Input.module.scss";
// import Icon from "../Icon";

interface InputProps {
  type: "text" | "number" | "email" | "date" | "tel" | "phone";
  placeholder: string;
  name: string;
  label: string;
  dataicon?: ReactElement | string;
  onChange?: (e: React.ChangeEvent<any>) => void;
  value?: any;
}

const Input: React.FC<InputProps> = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);

  const isError = Boolean(meta.error && meta.touched);
  const applyBorder = {
    border: "1px solid red",
  };

  const [active, setActive] = useState(false);

  const inputType = props.type;

  return (
    <div className={styles["input"]}>
      <label htmlFor={props.name} className={isError ? styles.labelError : ""}>
        {props.label}
      </label>
      <div
        className={styles["input__wrapper"]}
        style={isError ? applyBorder : {}}
      >
        {props.dataicon && (
          <section className={styles["input__wrapper--icon"]}>
            {props.dataicon}
          </section>
        )}
        <input
          {...field}
          {...props}
          type={inputType}
          onFocus={() => setActive(true)}
        ></input>
      </div>
      {isError && (
        <p className={styles["input__errors"]} data-error={isError}>
          {" "}
          {meta.error}{" "}
        </p>
      )}
    </div>
  );
};

export default Input;
