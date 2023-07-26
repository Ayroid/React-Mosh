interface Props {
  content: string;
  btnType: string;
  onClick: () => void;
}
const Button = ({ content, btnType, onClick }: Props) => {
  const classes = "m-2 btn btn-" + btnType;

  return (
    <button type="button" className={classes} onClick={onClick}>
      <strong>{content}</strong>
    </button>
  );
};

export default Button;
