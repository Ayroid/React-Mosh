import ListGroup from "./components/ListGroup";
function App() {
  const items = [
    "Dehradun",
    "Mumbai",
    "Ayodhya",
    "Vrindavan",
    "Mathura",
    "Kurukshetra",
  ];

  const heading = "Cities";

  return (
    <div>
      <ListGroup items={items} heading={heading} />
    </div>
  );
}

export default App;
