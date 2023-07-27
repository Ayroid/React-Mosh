import { useState } from "react";
// import styles from "./ListGroup.module.css";
import styled from "styled-components";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

// DEFINING A STYLED COMPONENT

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 0.5rem;
  margin: 0.5rem 0;
  cursor: pointer;
  background: ${(props) => (props.active ? "yellow" : "transparent")};
`;

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

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
      {/* <ul className={styles.listGroup}> */}
      <List>
        {items.map((item, index) => (
          // <li
          //   className={
          //     selectedIndex === index
          //       ? [`${styles.listGroupItem}, ${styles.active}`].join(" ")
          //       : `${styles.listGroupItem}`
          //   }
          //   key={item}
          //   onClick={() => {
          //     setSelectedIndex(index);
          //     onSelectItem(item);
          //   }}
          // >
          //   {item}
          // </li>
          <ListItem
            active={selectedIndex === index}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
        {/* </ul> */}
      </List>
    </>
  );
}

export default ListGroup;
