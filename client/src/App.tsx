import React from "react";

import Order from "./pages/Order";
import Menu from "./pages/Menu";

import CustomButton from "./components/common/Button";
import Header from "./components/ui/Header";

function App() {
  return (
    <div className="max-w-[640px] mx-auto">
      <Header />
      <Menu />
      <CustomButton variant="primary">Primary Button</CustomButton>
      <CustomButton variant="secondary">1</CustomButton>
      <CustomButton variant="tertiary">Tertiary Button</CustomButton>
      <CustomButton variant="quaternary">Quaternary Button</CustomButton>
    </div>
  );
}

export default App;
