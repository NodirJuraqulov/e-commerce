import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Form, Input } from "antd";
import { PatternFormat } from 'react-number-format';
import axios from "axios";
import { clearCart } from "@/redux/features/cart";

const BOT_TOKEN = "7584979872:AAHX-jPBW7WzpKcQpN_q53WvKKXUi8gn3QY"
const USER_ID = "7269993953"

const Checkout = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch()

  if (!cart.length) {
    return <Navigate to="/cart" replace />;
  }

  const onFinish = (values) => {
    let text = ""
    text += `ORDER: %0A %0A`
    text += "USER: %0A"
    text += `  Name: ${values.name} %0A`
    text += `  Address: ${values.address} %0A`
    text += `  Number: ${values.number} %0A %0A`
    text += `PRODUCT: %0A`

    cart.forEach( product => {
        text += ` Title: ${product.title} %0A`
        text += ` Quantity: ${product.quantity} %0A`
        text += ` Price: ${product.price} %0A %0A`
    });

    text += `TOTAL: ${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)}`

    axios
        .get(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${text}`)
        .then(res => {
            dispatch(clearCart())
        })
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-35 container mx-auto">
      <div className="p-10 border-1 border-[#E0E0E0] rounded-md  shadow-md w-1/2 mx-auto">
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          className="w-full text-center"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="number"
            rules={[
              { required: true, message: "Please input your Phone number!" },
            ]}
          >
            <PatternFormat format="+998 ## ### ## ##" allowEmptyFormatting mask="_" />
          </Form.Item>

          <Form.Item label={null}>
            <button
            className="border-1 border-[#B88E2F] mt-5 text-[#B88E2F] font-semibold text-[16px] py-3 px-[78px] cursor-pointer"
            style={{ lineHeight: "24px" }}
            htmlType="submit"
          >
            Submit
          </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default React.memo(Checkout);
