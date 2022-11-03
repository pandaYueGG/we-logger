import React, { useState, useEffect, useRef } from "react";
import { Video } from "../types";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { BsPlay, BsFillPlayFill } from "react-icons/bs";
import { HiPause, HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { GoVerified } from "react-icons/go";

interface IProps {
  post: Video;
}

const VideoCard: NextPage<IProps> = ({ post }) => {
  const [isHover, setIsHover] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current?.pause();
      setPlaying(false);
    } else {
      videoRef.current?.play();
      setPlaying(true);
    }
  };

  return (
    <div className="flex flex-col border-b-2 border-gray-200 pb-4">
      <div>
        <div className="flex gap-3 p-2 cursor-pointer font-semibold roundex">
          <div className="md:w-16 md:h-16 w-12 h-12">
            <Link href="/">
              <>
                <Image
                  width={60}
                  height={60}
                  className="rounded-full"
                  src={post.postedBy.image}
                  alt="Profile Avatar"
                  layout="responsive"
                />
              </>
            </Link>
          </div>
          <div>
            <Link href="/">
              <div className="flex items-center gap-2">
                <p className="flex items-center gap-2 md:text-md font-bold text-primary">
                  {post.postedBy.userName}
                  {` `}
                  <GoVerified className="text-blue-400 text-md" />
                </p>
                <p className="capitalize font-medium text-xs text-gray-400 hidden md:block">
                  {post.postedBy.userName}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* video */}
      <div className="lg:ml-20 flex gap-4 relative">
        <div
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
          className="rounded-3xl"
        >
          <Link href="/">
            <video
              loop
              ref={videoRef}
              src={post.video.asset.url}
              className="lg:w[600px] h-[300px] md:h-[360px] lg:h-[500px] w-[200px] rounded-2xl cursor-pointer bg-gray-200"
            ></video>
          </Link>
          {isHover && (
            <div className="absolute bottom-1 cursor-pointer left-8 md:left-12 lg:left-0 flex gap-10 lg:justify-between w-[100px] md:w-[50px] p-3">
              {playing ? (
                <button onClick={onVideoPress}>
                  <HiPause className="text-black text-2xl lg:text-4xl" />
                </button>
              ) : (
                <button onClick={onVideoPress}>
                  <BsFillPlayFill className="text-black text-2xl lg:text-4xl" />
                </button>
              )}
              {isMuted ? (
                <button onClick={() => setIsMuted(false)}>
                  <HiVolumeOff className="text-black text-2xl lg:text-4xl" />
                </button>
              ) : (
                <button onClick={() => setIsMuted(true)}>
                  <HiVolumeUp className="text-black text-2xl lg:text-4xl" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
