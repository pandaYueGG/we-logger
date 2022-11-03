import React from "react";

interface IProps {
  result: string;
}

const NoResult = ({ result }: IProps) => {
  return <div>NO RESULT</div>;
};

export default NoResult;
