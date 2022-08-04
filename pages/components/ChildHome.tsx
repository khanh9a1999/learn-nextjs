import React from "react";

type Props = {
  data?: {
    number: number;
    name: string;
  };
  state?: any;
  typeOk?: any;
};

const ChildPage: React.FC<Props> = ({ data, state, typeOk = "khanhdz" }) => {
  console.log("re-render");
  return (
    <>
      <h1>Child Page {data?.number}</h1>
      <div>random: {state}</div>
      <div>{typeOk}</div>
    </>
  );
};

export default React.memo(ChildPage);
