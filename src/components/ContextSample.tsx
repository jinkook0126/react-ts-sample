import React from "react";

const TitleContext = React.createContext("");

const Title = (): JSX.Element => {
  return (
    <TitleContext.Consumer>
      {(title) => {
        return <h1>{title}</h1>;
      }}
    </TitleContext.Consumer>
  );
};

const Header = (): JSX.Element => {
  return (
    <div>
      <Title />
    </div>
  );
};

const Page = (): JSX.Element => {
  const title = "Jinkook is bestest";
  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  );
};

export default Page;
