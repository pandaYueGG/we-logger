import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { topics } from "../utils/seeds";

const Discover = () => {
  const router = useRouter();
  const { topic } = router.query;

  const activeTopicStyle =
    "xl:border-2 hover:bg-primary xl:border-[#fe2c55] px-3 py-2 rounded xl:rounded-full flex justify-center items-center gap-2 cursor-pointer text-[#fe2c55]";
  const topicStyle =
    "xl:border-2 hover:bg-primary xl:border-gray-200 px-3 py-2 rounded xl: rounded-full flex items-center justify-center gap-2 cursor-pointer text-black";

  return (
    <div className="xl:border-b-2 xl:border-gray-200 pb-6">
      <p className="text-gray-400 font-semibold m-3 mt-4 hidden xl:block">
        Topics
      </p>
      <div className="flex flex-wrap gap-3">
        {topics.map((item) => (
          <Link href={`/?topic=${item.name}`} key={item.name}>
            <div
              className={topic === item.name ? activeTopicStyle : topicStyle}
            >
              <span className="font-bold text-2xl xl:text-md">{item.icon}</span>
              <span className="font-light text-md hidden xl:block capitalize">
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Discover;
