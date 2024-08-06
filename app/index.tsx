import { useState } from "react";

import { GreetingView } from "./Pages";

import { generateRandomColor } from "@/utils";
import { Colors } from "@/constants/Colors";

const App = () => {
  //Depending on the extension of the business logic,
  //we could use both Async Store and Context.API form React,
  //but at the moment, due to the simplicity of the application,
  //we decided to use useState
  const [bgColor, setBgColor] = useState<string>(Colors.white);

  const handleBackgroundColorChange = () => {
    setBgColor(generateRandomColor());
  };

  return (
    <GreetingView
      bgColor={bgColor}
      onBackgroundColorChange={handleBackgroundColorChange}
    />
  );
};

export default App;
