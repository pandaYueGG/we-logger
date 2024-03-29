import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import GoogleLogin from "react-google-login";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { BsArrowBarLeft } from "react-icons/bs";
import Discover from "./Discover";
import SuggestedAccount from "./SuggestedAccount";
import Footer from "./Footer";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const normalLink =
    "flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded";
  const userProfile = false;

  return (
    <div>
      <div
        className="block xl:hidden m-2 ml-4 mt-4 text-xl"
        onClick={() => setShowSidebar((prev) => !prev)}
      >
        {showSidebar ? <BsArrowBarLeft /> : <AiOutlineMenu />}
      </div>
      {showSidebar ? (
        <div className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3">
          <div className="xl:border-b-2 border-gray-200 xl:pb-4">
            <Link href="/">
              <div className={normalLink}>
                <p className="text-2xl">
                  <AiOutlineHome />
                </p>
                <span className=" capitalize text-xl hidden xl:block">
                  Home
                </span>
              </div>
            </Link>
          </div>
          {/* {!userProfile && (
            <div className="px-2 py-4 hidden xl:block">
              <p>Log in for more options</p>
              <div className="pr-4">
                <GoogleLogin
                  clientId=""
                  render={(renderProps) => (
                    <button
                      className="cursor-pointer bg-white text-lg text-[#fe2c55] border-[1px] border-[#fe2c55] font-semibold px-6 py-3 rounded-md outline-none w-full mt-3 hover:text-white hover:bg-[#fe2c55]"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Log In
                    </button>
                  )}
                  onSuccess={() => {}}
                  onFailure={() => {}}
                  cookiePolicy="single_host_origin"
                />
              </div>
            </div>
          )} */}
          <Discover />
          <SuggestedAccount />
          <Footer />
        </div>
      ) : null}
    </div>
  );
};

export default Sidebar;
