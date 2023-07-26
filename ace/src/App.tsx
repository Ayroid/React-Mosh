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

const App = () => {
  // const text = "Primary Alert!!";

  return (
    <div>
      <Alert>
        Hello World
      </Alert>
    </div>
  );
};

export default App;
