interface Props {
  cart: {
    discount: number;
    items: {
      id: number;
      title: string;
      quantity: number;
      price: number;
    }[];
  };
  onAdd: (id: number) => void;
}
const ShoppingCart = ({ cart }: Props) => {
  return (
    <>
      <div>ShoppingCart</div>
      <div>Discount: {cart.discount}</div>
      <div>
        {cart.items.map((item) => (
          <div key={item.id}>
            <div>Title: {item.title}</div>
            <div>Quantity: {item.quantity}</div>
            <div>Price: {item.price}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShoppingCart;
