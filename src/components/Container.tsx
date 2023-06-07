import React from "react";

type ContainerProps = {
  title: string;
  children: React.ReactElement;
};
const Container = (props: ContainerProps): JSX.Element => {
  const { title, children } = props;
  return (
    <div style={{ backgroundColor: "wheat" }}>
      <h1>{title}</h1>
      <h1>{children}</h1>
    </div>
  );
};

const Parent = (props: {}): JSX.Element => {
  return (
    <Container title="Hello Child">
      <ol>
        <li>html</li>
        <li>css</li>
        <li>js</li>
      </ol>
    </Container>
  );
};

export default Parent;
