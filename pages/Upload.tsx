import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import useAuthStore from "../store/authStore";
import { client } from "../utils/client";
import { IoMdCloudUpload } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { SanityAssetDocument } from "@sanity/client";

import { topics } from "../utils/seeds";

const Upload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [videoAsset, setVideoAsset] = useState<
    SanityAssetDocument | undefined
  >();
  const [wrongFileType, setWrongFileType] = useState(false);

  const uploadVideo = async (e: any) => {
    const selectedFile = e.target.files[0];
    const fileTypes = ["video/mp4", "video/webm", "video/ogg"];

    if (fileTypes.includes(selectedFile.type)) {
      client.assets
        .upload("file", selectedFile, {
          contentType: selectedFile.type,
          filename: selectedFile.name,
        })
        .then((data) => {
          setVideoAsset(data);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
      setWrongFileType(true);
    }
  };

  return (
    <div className="flex w-full h-full absolute left-0 top-[60px] lg:top-[70px] mb-10 pt-10 lg:pt-20 bg-[#f8f8f8] justify-center">
      <div className="bg-white rounded-lg xl:h-[80vh] w-[60%] flex flex-wrap justify-between items-center gap-6 p-14 pt-6">
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
                  <div>
                    <video
                      src={videoAsset.url}
                      loop
                      controls
                      className="rounded-xl h-[400px] mt-16 bg-black"
                    ></video>
                  </div>
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
                      <p className="text-gray-400 text-center text-xs mt-10 leading-6">
                        MP4 or WebM or ogg <br />
                        720x1280 or higher
                        <br />
                        Up to 10 minutes
                        <br />
                        Less than 2GB
                      </p>
                      <p className="bg-[#00f2ea] text-center mt-10 rounded text-white text-md font-medium p-2 w-40 outline-non">
                        Select File
                      </p>
                    </div>
                    <input
                      type="file"
                      name="upload-video"
                      onChange={uploadVideo}
                      className="h-0 w-0"
                    />
                  </label>
                )}
              </div>
            )}
            {wrongFileType && (
              <p className="text-center text-base text-red-500 font-normal mt-4 w-[250px]">
                Wrong File Type!
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3 ph-10">
          <label className="text-md font-medium">Caption</label>
          <input
            className="rounded outline-none text-md border-2 border-gray-200 p-2"
            type="text"
            value=""
            onChange={() => {}}
          />
          <label className="text-md font-medium">Choose a Tag</label>
          <select
            onChange={() => {}}
            className="outline-none border-2 border-gray-200 text-md capitalize lg:p-4 p-2 rounded cursor-pointer"
          >
            {topics.map((topic) => (
              <option
                key={topic.name}
                value={topic.name}
                className="outline-none capitalize bg-white text-gray-400 text-md p-2 hover:bg-slate-300"
              >
                {topic.name}
              </option>
            ))}
          </select>
          <div className="flex gap-6 mt-10">
            <button
              onChange={() => {}}
              type="button"
              className="border-gray-200 border-2 text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
            >
              Discard
            </button>
            <button
              type="button"
              onChange={() => {}}
              className="bg-[#00f2ea] text-white text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
