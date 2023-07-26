interface Props {
  onClose: () => void;
}

const Alert = ({ onClose }: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible" role="alert">
      <strong>Holy Alert!</strong>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;