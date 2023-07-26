import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
  const btnType = "warning";
  const content = btnType.toUpperCase();

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisible(false);
          }}
        />
      )}
      <Button
        onClick={() => {
          setAlertVisible(true);
        }}
        content={content}
        btnType={btnType}
      />
    </>
  );
};

export default App;
