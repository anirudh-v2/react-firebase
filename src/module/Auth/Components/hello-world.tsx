import React from "react";

export default function HelloWorld() {
  const [state, setState] = React.useState<boolean>(false);

  React.useEffect(() => {
    console.log("state changed");
  }, [state]);

  function handleClick() {
    console.log("handling click");
    setState(true);
  }

  return <button onClick={handleClick}>test</button>;
}
