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

import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
  const btnType = "warning";
  const btnValue = btnType.toUpperCase();

  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button btnType={btnType} btnValue={btnValue}></Button>
    </div>
  );
};

export default App;
