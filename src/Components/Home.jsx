import React, { useState } from "react";

const Home = () => {
  const [data, setData] = useState("click me");
  let name = [
    "JAMES",
    "JOHN",
    "ROBERT",
    "MICHAEL",
    "WILLIAM",
    "DAVID",
    "RICHARD",
    "CHARLES",
    "JOSEPH",
    "THOMAS",
    "CHRISTOPHER",
    "DANIEL",
    "PAUL",
  ];
  const showName = () => {
    return name[showRandomNumber(theme)];
  };

  let theme = [
    " Good vs. evil",
    "Love",
    "Redemption",
    "Courage and perseverance",
    "Coming of age",
    "Revenge",
  ];
  const showTheme = () => {
    showRandomNumber(theme);
    return theme[showRandomNumber(theme)];
  };
  let flaw = [
    "Abusive",
    "Addiction",
    "Excessive Pride",
    "Fear",
    "Greed",
    "Jealousy",
    "Incompetence",
    "Lust for Power",
    "Rebellious",
    "Vanity",
  ];
  const showFlaw = () => {
    return flaw[showRandomNumber(theme)];
  };

  const showData = () => {
    // console.log(tempName);
    setData({
      name: showName(),
      theme: showTheme(),
      flaw: showFlaw(),
    });
  };

  const showRandomNumber = (array) => {
    return Math.floor(Math.random() * array.length);
    // console.log(setNumber);
  };
  return (
    <div className="w-screen">
      {/* Title */}
      <div className="title text-4xl mt-28 text-center">
        Idea Generator by Adarsh Kunwar
      </div>
      {/* table for ideas */}
      <div className=" container mx-auto h-96 border-4 mt-10">
        the MC of this story is: {data.name}
        <br />
        the theme of this story is: {data.theme}
        <br />
        the MC has to overcome is: {data.flaw}
      </div>
      {/* button */}
      <div className="flex justify-center " onClick={showData}>
        <div className="w-4/12 mt-8  px-40 py-12 border-4 border-red-700 rounded-2xl bg-orange-400">
          <div className="flex justify-center items-center text-xl cursor-pointer select-none">
            Click me to generate Idea
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
