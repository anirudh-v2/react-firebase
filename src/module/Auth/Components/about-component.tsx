import React from "react";

const About = React.forwardRef<any>((props, ref) => {
  const inputRef = React.useRef<any>();
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    console.log(inputRef);
  });

  React.useImperativeHandle(ref, () => ({
    inputValue: inputValue,
    focus: focus,
  }));

  function inputValue() {
    return inputRef.current.value;
  }

  function focus() {
    return inputRef.current.focus();
  }

  return (
    <input
      ref={inputRef}
      onChange={() => setValue(inputRef.current.value)}
      value={value}
    />
  );
});

export default About;
