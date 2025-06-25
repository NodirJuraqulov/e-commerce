import React, { useMemo, useState } from "react";
import { Tabs } from "antd";
import ProductDesc from "./ProductDesc";
import AddInform from "./AddInform";
import Reviews from "./Reviews";

const Description = ({product}) => {
  const [size, setSize] = useState("small");
  const [activeKey, setActiveKey] = useState("1");
  const items = useMemo(() => [
    {
      label: <p className={activeKey === "1" ? "text-black" : "text-[#9F9F9F]"}>Description</p>,
      key: "1",
      children: <ProductDesc />,
    },
    {
      label: <p className={activeKey === "2" ? "text-black" : "text-[#9F9F9F]"}>Additional Information</p>,
      key: "2",
      children: <AddInform />,
    },
    {
      label: <p className={activeKey === "3" ? "text-black" : "text-[#9F9F9F]"}>Reviews</p>,
      key: "3",
      children: <Reviews product={product} />,
    },
  ], [activeKey]);

  return (
    <div className="w-full py-[55px] border-t-2 border-b-2 min-h-[744px] border-[#D9D9D9] mt-3">
      <div className="container mx-auto">
        <Tabs
          activeKey={activeKey}
          onChange={(key) => setActiveKey(key)}
          size={size}
          style={{ marginBottom: 32 }}
          items={items}
          className="w-full flex items-center justify-center"
          tabBarStyle={{ fontSize: "24px", fontWeight: "500" }}
        />
      </div>
    </div>
  );
};

export default React.memo(Description);
