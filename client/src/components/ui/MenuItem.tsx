import React from "react";

export default function MenuItem({
  name,
  description,
  price,
}: {
  name: string;
  description: string;
  price: number;
}) {
  return (
    <div className="flex flex-col gap-1 mb-2">
      <div className="flex items-center justify-between">
        <h3 className="text-small font-semibold leading-small">{name}</h3>
        <span className="text-small font-semibold leading-small">
          ${price.toFixed(2)}
        </span>
      </div>
      <p className="text-tiny leading-tiny font-tiny text-gray-600">
        {description}
      </p>
    </div>
  );
}
