// import { MouseEvent } from "react";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // const handleClick = (event: MouseEvent) => {
  //   console.log(event);
  // };

  return (
    /*
      IN ORDER TO RETURN MULTIPLE TAGS FROM A COMPONENT, WE CAN WRAP EVERYTHING INSIDE:
        1. <div> </div>
        2. <React.Fragment> </React.Fragment>
        3. <> </>
    */

    <>
      <h1>{heading}</h1>
      {/* CONDITIONAL RENDERING */}
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
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
