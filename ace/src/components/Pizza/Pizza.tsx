interface Props {
  pizza: {
    name: string;
    price: number;
    toppings: string[];
  };
  onToppingsAdd: () => void;
}
const Pizza = ({ pizza, onToppingsAdd }: Props) => {
  return (
    <>
      <div>Pizza</div>
      <div>Name: {pizza.name}</div>
      <div>Price: {pizza.price}</div>
      <div>Toppings: {pizza.toppings.join(", ")}</div>
      <button onClick={onToppingsAdd}>Add Toppings</button>
    </>
  );
};

export default Pizza;
