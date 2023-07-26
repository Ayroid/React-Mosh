interface Props {
  btnType: string;
  children: string;
  onClick: () => void;
}

const Button = ({ btnType, children, onClick }: Props) => {
  const classes = "m-1 border btn btn-";
  return (
    <button onClick={onClick} type="button" className={classes + btnType}>
      {children}
    </button>
  );
};

export default Button;
