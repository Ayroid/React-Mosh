function ListGroup() {
  const items = [
    "Dehradun",
    "Mumbai",
    "Ayodhya",
    "Vrindavan",
    "Mathura",
    "Kurukshetra",
  ];
  // items = [];

  return (
    /*
      IN ORDER TO RETURN MULTIPLE TAGS FROM A COMPONENT, WE CAN WRAP EVERYTHING INSIDE:
        1. <div> </div>
        2. <React.Fragment> </React.Fragment>
        3. <> </>
    */

    <>
      <h1>List</h1>
      {/* CONDITIONAL RENDERING */}
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => {
              console.log("Clicked");
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
