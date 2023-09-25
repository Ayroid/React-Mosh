import { FormEvent, useRef, useState } from "react";

const Form = () => {
  // USING REF HOOK TO GET THE FORM FIELD VALUES
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };

  // USING STATE HOOK TO GET THE FORM FIELD VALUES

  const [person1, setPerson1] = useState({
    name: "",
    age: 0,
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) {
      person.name = nameRef.current.value;
    }
    if (ageRef.current !== null) {
      person.age = parseInt(ageRef.current.value);
    }

    console.log(person);
    console.log(person1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // USE STATE HOOK
          onChange={(event) => {
            setPerson1({
              ...person1,
              name: event.target.value,
            });
          }}
          value={person1.name}
          // USE REF HOOK
          ref={nameRef}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          // USE STATE HOOK
          onChange={(event) => {
            setPerson1({
              ...person1,
              age: parseInt(event.target.value),
            });
          }}
          value={person1.age}
          // USE REF HOOK
          ref={ageRef}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        SUBMIT
      </button>
    </form>
  );
};

export default Form;
