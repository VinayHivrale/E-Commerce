import React from "react";

const AddressCard = () => {
  return (
    <div className="space-y-3 rounded-lg ">
      <div className="space-y-1">
        <p className="font-semibold">Ram Kapoor</p>
        <p className="text-gray-600">
          Gokul Dham Society Powder Gali, Maharashtra, 444905
        </p>
      </div>
      <div className="space-y-1 font-semibold">
        <p className="font-semibold">Phone:</p>
        <p>9356407508</p>
      </div>
    </div>
  );
};

export default AddressCard;
