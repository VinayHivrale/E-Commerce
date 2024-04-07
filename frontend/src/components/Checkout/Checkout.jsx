import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import AddressCard from "./AddressCard";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";

const steps = ["Login", "Dilivery address", "Order summary", "Payment"];

const Checkout = () => {
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

    console.log(address);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <Box className="my-7">
        <Stepper activeStep={step} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {step == 2 ? (
        <div className="font-[sans-serif] bg-gray-50">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 h-full">
            <div className="bg-[#3f3f3f] lg:h-screen lg:sticky lg:top-0">
              <div className="relative h-full">
                <div className=" px-4 py-8 h-[400px] overflow-auto lg:h-[calc(100vh-0px)]">
                  <h2 className="text-2xl font-bold text-white">Address</h2>
                  <form>
                    <div className="space-y-3 bg-white mt-10 p-5 cursor-pointer">
                      <AddressCard />
                      <button
                        type="submit"
                        className=" bg-gray-400 hover:bg-slate-950 text-white p-2  font-semibold rounded-md"
                      >
                        Deliver Here
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="xl:col-span-2 h-max rounded-md p-8 sticky top-0">
              <h2 className="text-2xl font-bold text-[#333]">
                Complete your order
              </h2>
              <form className="mt-10" onSubmit={handleSubmit}>
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
      ) : (
        <div className="px-20">
          <div className="p-5 shadow-md">
            <AddressCard />
          </div>
          <div className="grid grid-cols-5 gap-2 mt-5">
            <div className="col-span-3">
              {[1, 1].map((itme) => (
                <Cart />
              ))}
            </div>
            <div className="col-span-2">
              <div className="">
                <div className="bg-[#fcf6f5ff] p-4 shadow-md">
                  <h2 className="text-lg font-bold mb-2 xs:mb-4">
                    Price Details
                  </h2>

                  <div className="flex text-sm md:text-base justify-between mb-2">
                    <p>Price (item 3)</p>
                    <p>₹4697</p>
                  </div>
                  <div className="flex text-sm md:text-base  justify-between mb-2">
                    <p>Discount)</p>
                    <p>-₹2697</p>
                  </div>
                  <div className="flex text-sm md:text-base  justify-between mb-2">
                    <p>Delivery Charges</p>
                    <p>Free</p>
                  </div>
                  <hr className="border-t border-blue-950 mb-4" />

                  <div className="flex text-sm md:text-base font-semibold justify-between ">
                    <p>Total Amount:</p>
                    <p>₹5998</p>
                  </div>
                  <div className="mt-6">
                    <button className="w-full text-sm md:text-lg bg-[#2F3C7E] font-semibold text-white px-3 py-1 rounded">
                      Payment
                    </button>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or
                      <Link to="/">
                        <button
                          type="button"
                          className="ml-1 font-medium text-[#2F3C7E] hover:text-indigo-500"
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
