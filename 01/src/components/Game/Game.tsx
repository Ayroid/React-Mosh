interface Props {
  player: {
    id: number;
    player: {
      name: string;
      age: number;
    };
  };
  onClick: () => void;
}
const Game = ({ player, onClick }: Props) => {
  return (
    <>
      <div>Id: {player.id}</div>
      <div>Name: {player.player.name}</div>
      <div>Age: {player.player.age}</div>
      <button onClick={onClick}>Change Name</button>
    </>
  );
};

export default Game;
