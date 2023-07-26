interface Props {
  btnType: string;
  btnValue: string;
}

const Button = ({ btnType, btnValue }: Props) => {
  const classes = "btn btn-";
  return (
    <button type="button" className={classes + btnType + " m-2 border"}>
      {btnValue}
    </button>
  );
};

export default Button;
