import React from "react";
import { footerList1, footerList2, footerList3 } from "../utils/seeds";

const RenderList = ({ items, empty }: { items: string[]; empty: boolean }) => (
  <div className={`flex flex-wrap gap-2 ${empty && "mt-4"}`}>
    {items.map((item) => (
      <p
        key={item}
        className="text-gray-400 text-sm hover:underline cursor-pointer"
      >
        {item}
      </p>
    ))}
  </div>
);

const Footer = () => {
  return (
    <div className="mt-6 hidden xl:block">
      <RenderList items={footerList1} empty={false} />
      <RenderList items={footerList2} empty />
      <RenderList items={footerList3} empty />
      <p className="text-gray-400 text-sm mt-5">2022 WeLogger</p>
    </div>
  );
};

export default Footer;
