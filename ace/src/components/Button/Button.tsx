import styles from "./Button.module.css";

interface Props {
  // btnType: string;
  children: string;
  onClick: () => void;
}

const Button = ({children, onClick }: Props) => {
  const classes = styles.customBtn;
  return (
    <button onClick={onClick} type="button" className={classes}>
      {children}
    </button>
  );
};

export default Button;
