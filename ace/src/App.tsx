// ListGroup Componen Call

// import ListGroup from "./components/ListGroup";
// function App() {
//   const items = [
//     "Dehradun",
//     "Mumbai",
//     "Ayodhya",
//     "Vrindavan",
//     "Mathura",
//     "Kurukshetra",
//   ];

//   const heading = "Cities";

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading={heading}
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
  const btnType = "warning";
  const btnValue = btnType.toUpperCase();
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisible(false);
          }}
        >
          Hello World!!
        </Alert>
      )}
      <Button
        onClick={() => {
          setAlertVisible(true);
        }}
        btnType={btnType}
      >
        {btnValue}
      </Button>
    </div>
  );
};

export default App;
