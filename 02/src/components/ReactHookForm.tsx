import { FieldValues, useForm } from "react-hook-form";

const ReactHookForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="d-flex justify-content-center align-items-center flex-column"
    >
      <div className="mb-3 field-div">
        <label htmlFor="name" className="form-label">
          NAME
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3 field-div">
        <label htmlFor="age" className="form-label">
          AGE
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">SUBMIT</button>
    </form>
  );
};

export default ReactHookForm;
