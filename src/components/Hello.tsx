const Hello = () => {
  const onClick = () => {
    alert("hello");
  };
  const text: string = "hello";
  return <div onClick={onClick}>{text}</div>;
};

export default Hello;
