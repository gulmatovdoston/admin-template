import React from "react";
import { Button, Form, Input, Alert } from "antd";
import { MailOutlined, UnlockOutlined, CheckOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export const VerifyForm = (props) => {
  const { otherSignIn, showForgetPassword, showMessage, message } = props;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, marginBottom: 0 }}
        animate={{
          opacity: showMessage ? 1 : 0,
          marginBottom: showMessage ? 20 : 0,
        }}
      >
        <Alert type="error" showIcon message={message}></Alert>
      </motion.div>
      <Form layout="vertical" name="login-form">
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please input your email",
            },
            {
              type: "email",
              message: "Please enter a validate email!",
            },
          ]}
        >
          <Input prefix={<MailOutlined className="text-primary" />} />
        </Form.Item>
        <Form.Item
          name="verification_code"
          label={
            <div
              className={`${
                showForgetPassword
                  ? "d-flex justify-content-between w-100 align-items-center"
                  : ""
              }`}
            >
              <span>Verification Code</span>
            </div>
          }
          rules={[
            {
              required: true,
              message: "Please enter your verification code ",
            },
          ]}
        >
          <Input prefix={<UnlockOutlined className="text-primary" />} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Verify
          </Button>
        </Form.Item>
        {otherSignIn}
        {/* {extra} */}
      </Form>
    </>
  );
};

VerifyForm.propTypes = {
  otherSignIn: PropTypes.bool,
  showForgetPassword: PropTypes.bool,
  extra: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

VerifyForm.defaultProps = {
  otherSignIn: true,
  showForgetPassword: false,
};

export default VerifyForm;
