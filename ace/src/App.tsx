import { useState } from "react";
import Alert from "./components/Alert/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import { BsFillCalendarFill } from "react-icons/bs";

const App = () => {
  const btnType = "warning";
  const btnValue = btnType.toUpperCase();
  const [alertVisible, setAlertVisible] = useState(false);

  const items = [
    "Dehradun",
    "Mumbai",
    "Ayodhya",
    "Vrindavan",
    "Mathura",
    "Kurukshetra",
  ];

  const heading = "Cities";

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {/* Alert Component */}

      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisible(false);
          }}
        >
          Hello World!!
        </Alert>
      )}

      {/* List Component */}

      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      ></ListGroup>

      {/* Button Component */}

      <Button
        onClick={() => {
          setAlertVisible(true);
        }}
        // btnType={btnType}
      >
        {btnValue}
      </Button>

      {/* Icon Component */}

      <BsFillCalendarFill color="black" size="3rem" />
    </div>
  );
};

export default App;
