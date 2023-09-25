import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

function Like({ onClick }: Props) {
  const [likeClicked, setLikeClicked] = useState(false);

  const toggleLike = () => {
    setLikeClicked(!likeClicked);
    onClick();
  };

  if (likeClicked)
    return <AiFillHeart size="40" color="red" onClick={() => toggleLike()} />;
  else
    return (
      <AiOutlineHeart size="40" color="red" onClick={() => toggleLike()} />
    );
}

export default Like;
