import React, { useEffect } from "react";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Alert } from "antd";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const rules = {
  email: [
    {
      required: true,
      message: "Please input your email address",
    },
    {
      type: "email",
      message: "Please enter a validate email!",
    },
  ],
  first_name: [
    {
      required: true,
      message: "Please input your First Name",
    },
  ],
  last_name: [
    {
      required: true,
      message: "Please input your Last Name",
    },
  ],
  password: [
    {
      required: true,
      message: "Please input your password",
    },
  ],
  confirm: [
    {
      required: true,
      message: "Please confirm your password!",
    },
    ({ getFieldValue }) => ({
      validator(rule, value) {
        if (!value || getFieldValue("password") === value) {
          return Promise.resolve();
        }
        return Promise.reject("Passwords do not match!");
      },
    }),
  ],
};

export const RegisterForm = (props) => {
  const { loading, message, showMessage } = props;
  const [form] = Form.useForm();

  // const onSignUp = () => {
  //   form
  //     .validateFields()
  //     .then((values) => {
  //       showLoading();
  //       const fakeToken = "fakeToken";
  //       JwtAuthService.signUp(values)
  //         .then((resp) => {
  //           authenticated(fakeToken);
  //         })
  //         .then((e) => {
  //           showAuthMessage(e);
  //         });
  //     })
  //     .catch((info) => {
  //       console.log("Validate Failed:", info);
  //     });
  // };

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
      <Form
        form={form}
        layout="vertical"
        name="register-form"
        // onFinish={onSignUp}
      >
        <Form.Item name="email" label="Email" hasFeedback rules={rules.email}>
          <Input prefix={<MailOutlined className="text-primary" />} />
        </Form.Item>
        <Form.Item
          name="first_name"
          label="First Name"
          hasFeedback
          rules={rules.first_name}
        >
          <Input prefix={<UserOutlined className="text-primary" />} />
        </Form.Item>
        <Form.Item
          name="last_name"
          label="Last Name"
          hasFeedback
          rules={rules.last_name}
        >
          <Input prefix={<UserOutlined className="text-primary" />} />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={rules.password}
          hasFeedback
        >
          <Input.Password prefix={<LockOutlined className="text-primary" />} />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="ConfirmPassword"
          rules={rules.confirm}
          hasFeedback
        >
          <Input.Password prefix={<LockOutlined className="text-primary" />} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default RegisterForm;
