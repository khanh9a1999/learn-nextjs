import React, { useRef, useState } from "react";
import ChildPage from "./components/ChildHome";

type Props = {};

const HomePage: React.FC<Props> = () => {
  const [state, setState] = useState<any>(0);
  const ref = useRef<any>(null);

  const abc = "age";

  let data: any = {
    [abc]: 1000,
    name: "khanh",
  };
  const handleClick = () => {
    // setState(1);
    console.log(data);
  };

  const _data = [
    {
      age: 100,
      name: "khanh",
    },
    {
      age: 1000,
      name: "chien",
    },
    {
      age: 1,
      name: "loi",
    },
  ];

  const handleOnchange = (e: any) => {
    console.log("re-render-cha", e.target.value);
  };

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={handleClick}>click me</button>
      <ChildPage state={state} data={data} typeOk="loilvâjajj" />
      <dt>{data[abc]}</dt>
      <dd>{data.name}</dd>
      <input type="text" ref={ref} onChange={(e) => handleOnchange(e)} />
      {_data?.map((item: any) => (
        <>
          <div>{item?.age}</div>
          <div>{item?.name}</div>
        </>
      ))}
    </>
  );
};

export default HomePage;
