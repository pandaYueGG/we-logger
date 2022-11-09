import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { MdVerifiedUser, MdOutlineCancel } from "react-icons/md";
import { BsFillPlayFill } from "react-icons/bs";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import axios from "axios";

import { BASE_URL } from "../../utils";

const Detail = () => {
  return <div>detail</div>;
};

export const getServerSideProps = async ({ params: { id } }) => {
  const { data } = await axios.get(`${BASE_URL}/api/post`);

  return {
    props: { postDetails: data },
  };
};

export default Detail;
