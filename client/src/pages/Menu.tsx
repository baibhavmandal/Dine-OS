import React from "react";

import CustomButton from "../components/common/Button";

export default function Menu() {
  const _ = ["All", "Appetizers", "Main Course", "Desserts", "Beverages"];
  return (
    <div className="px-4 py-2">
      <div>
        <h1 className="text-page-heading leading-page-heading font-page-heading">
          Menu
        </h1>
      </div>
      <div className="flex gap-2 my-2">
        {_.map((category) => (
          <CustomButton key={category} variant="quaternary">
            {category}
          </CustomButton>
        ))}
      </div>
      <div>
        <h2 className="my-1 text-page-sectiion-heading">Appetizers</h2>
      </div>
    </div>
  );
}
