import type { NextPage } from "next";
import axios from "axios";
import { Video } from "../types";

interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  console.log("video: ", videos);
  return <h1 className="text-3xl font-bold underline-offset-4">Hello World</h1>;
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/post`);

  return {
    props: { videos: data },
  };
};

export default Home;
