import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AddressCard from "./AddressCard";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../redux/actions/orderActions";
import OrderSummary from "./OrderSummary";
import { colors } from "@mui/material";
import { getUser } from "../../redux/actions/authActions";

const steps = ["Login", "Dilivery address", "Order summary", "Payment"];

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const [isSave, setIsSave] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);

  const step = querySearch.get("step");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };
    const orderData = {
      address,
      navigate,
    };
    dispatch(createOrder(orderData));
    console.log(address);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  return (
    <div>
      <Box className="my-7 mx-auto" style={{ width: "50%" }}>
        <Stepper activeStep={step} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel sx={{ color: "gray" }}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {step == 2 && (
        <div className="font-[sans-serif] bg-gray-50">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 h-full">
            <div className="bg-[#3f3f3f] lg:sticky lg:top-0">
              <div className="relative h-[579px]">
                <div className=" px-4 py-8 overflow-auto">
                  <h2 className="text-2xl font-bold text-white">Address</h2>
                  {auth.user?.address?.map((address) => (
                    <div className="space-y-3 bg-white mt-10 p-5 cursor-pointer">
                      <AddressCard address={address}/>
                      <button
                        type="button"
                        className=" bg-gray-400 hover:bg-slate-950 text-white p-2  font-semibold rounded-md"
                      >
                        Deliver Here
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="xl:col-span-2 rounded-md py-8 sticky pr-10 top-0">
              <h2 className="text-2xl font-bold text-[#333]">
                Complete your order
              </h2>
              <form className="mt-5" onSubmit={handleSubmit}>
                <div>
                  <h3 className="text-lg font-bold text-[#333] mb-6">
                    Personal Details
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <div className="relative flex items-center">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="px-4 py-3.5 focus:ring-0 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                          name="firstName"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <div className="relative flex items-center">
                        <input
                          type="text"
                          placeholder="Last Name"
                          className=" px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] focus:ring-0"
                          name="lastName"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <div className="relative flex items-center">
                        <input
                          type="number"
                          placeholder="Phone No."
                          className="px-4 py-3.5 focus:ring-0 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                          name="phoneNumber"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-[#333] mb-6">
                    Shipping Address
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Address Line"
                        className="px-4 py-3.5 focus:ring-0 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                        name="address"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="City"
                        className="px-4 py-3.5 focus:ring-0 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                        name="city"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="State"
                        className="px-4 py-3.5 focus:ring-0 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                        name="state"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Zip Code"
                        className="px-4 py-3.5 focus:ring-0 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                        name="zip"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex gap-6 max-sm:flex-col mt-10">
                    <button
                      type="submit"
                      className="rounded-md px-6 py-3 w-1/2 text-sm font-semibold bg-[#333] text-white hover:bg-[#222]"
                    >
                      Deliver Here
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {step == 3 && <OrderSummary />}
    </div>
  );
};

export default Checkout;
