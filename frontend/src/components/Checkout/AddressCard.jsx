import React from "react";

const AddressCard = ({address}) => {
  return (
    <div className="space-y-3 rounded-lg ">
      <div className="space-y-1">
        <p className="font-semibold">{address.firstName} {address.lastName}</p>
        <p className="text-gray-600">
          {address.streetAddress}, {address.city}, {address.state}, {address.zipCode}
        </p>
      </div>
      <div className="space-y-1">
        <p className="font-semibold">Phone:</p>
        <p className="text-gray-600">{address.mobile}</p>
      </div>
    </div>
  );
};

export default AddressCard;
