import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import useAuthStore from "../store/authStore";
import { client } from "../utils/client";
import { IoMdCloudUpload } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

const Upload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [videoAsset, setVideoAsset] = useState();

  return (
    <div className="flex w-full h-full">
      <div className="bg-white rounded-lg">
        <div>
          <div>
            <p className="text-2xl font-bold">Upload Video</p>
            <p className="text-md text-gray-400">
              Post a video to your account
            </p>
          </div>
          <div className="border-dashed rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center outline-none mt-10 w-[260px] h-[460px] p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100">
            {isLoading ? (
              <p>Uploading...</p>
            ) : (
              <div>
                {videoAsset ? (
                  <div></div>
                ) : (
                  <label className="cursor-pointer">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="flex flex-col items-center justify-center">
                        <p className="font-bold text-xl">
                          <IoMdCloudUpload className="text-gray-400 text-6xl" />
                        </p>
                        <p className="text-sm font-medium text-gray-400">
                          Select a Video to Upload
                        </p>
                      </div>
                    </div>
                  </label>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
