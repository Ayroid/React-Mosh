import { useState } from "react";
import Alert from "./components/Alert/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
// import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like/Like";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Game from "./components/Game/Game";
import Pizza from "./components/Pizza/Pizza";
import ExpandableText from "./components/ExpandableText/ExpandableText";

const App = () => {
  const btnType = "warning";
  const btnValue = btnType.toUpperCase();
  const [alertVisible, setAlertVisible] = useState(false);
  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Sachin",
      age: 40,
    },
  });

  const [pizza, setPizza] = useState({
    name: "Margherita",
    price: 200,
    toppings: ["Cheese", "Tomato"],
  });

  const onToppingsAdd = () => {
    const newPizza = { ...pizza, toppings: [...pizza.toppings, "Capsicum"] };
    setPizza(newPizza);
  };

  const onGameClick = () => {
    const newGame = { ...game, player: { ...game.player, name: "Rahul" } };
    setGame(newGame);
  };

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

      {/* Navbar Component */}

      <Navbar cartItemsCount={cartItems.length} />

      {/* Cart Component */}

      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />

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

      {/* <BsFillCalendarFill color="black" size="3rem" /> */}

      {/* Like Component */}

      <Like
        onClick={() => {
          console.log("Clicked");
        }}
      />

      {/* Game Component */}
      <Game player={game} onClick={() => onGameClick()} />

      {/* Pizza Component */}
      <Pizza pizza={pizza} onToppingsAdd={() => onToppingsAdd()} />

      {/* Expandable Text Component */}
      <ExpandableText maxLength={200}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        doloribus deserunt repudiandae tempora cupiditate doloremque eaque
        officiis dicta eos id nam eius odio a reiciendis tenetur impedit
        accusantium nesciunt quibusdam omnis voluptatibus, voluptates harum
        nulla? Consequatur atque unde cumque error sint facere saepe aliquam
        modi inventore ipsum, totam aut assumenda accusantium delectus
        necessitatibus commodi veritatis omnis similique ullam sit! Reiciendis,
        dolorum dicta repudiandae praesentium labore commodi modi totam vitae
        dignissimos consequatur debitis ratione aspernatur nostrum fugiat minima
        enim ipsam ab non consequuntur rerum tempore repellendus unde! Labore,
        itaque culpa fugit aut inventore animi, dignissimos deserunt quia
        cupiditate quaerat earum libero aspernatur nihil et, illo a dolorum
        aliquam exercitationem in saepe necessitatibus ullam numquam? Accusamus
        consectetur repudiandae dolore? Officia nostrum nisi perferendis facilis
        molestias, asperiores perspiciatis sequi reprehenderit eveniet soluta
        eum, veniam nam. Corporis eos totam fugiat quam reiciendis in error
        ipsum minus rerum quidem similique repellendus sunt rem consectetur
        expedita blanditiis, accusantium non, veniam recusandae consequuntur nam
        aliquid voluptatum! Iste nihil in suscipit dolorum blanditiis ex et
        dolorem aliquid, deleniti dolor cum aut minima, non quibusdam eos
        necessitatibus tenetur voluptatum, cupiditate quis tempore eius optio
        asperiores vel officia. Fuga sed illum eum libero corporis ipsam
        cupiditate expedita doloremque numquam inventore!
      </ExpandableText>
    </div>
  );
};

export default App;
