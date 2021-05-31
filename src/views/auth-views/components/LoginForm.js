import React, { useEffect } from "react";
import { Button, Form, Input, Alert } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useMutation } from "react-query";
import { setAuthCredentials, setAuthTokens } from "../../../redux/actions";
import { requests } from "services/requests";
import { useDispatch } from "react-redux";
import { showNotification } from "utils/showNotification";
import { useHistory } from "react-router";
export const LoginForm = (props) => {
  const {
    otherSignIn,
    showForgetPassword,
    onForgetPasswordClick,
    showMessage,
    hideAuthMessage,
    message,
    token,
    allowRedirect,
    redirect,
  } = props;

  const dispatch = useDispatch();
  const history = useHistory();
  const login = useMutation(requests.auth.login, {
    onSuccess: ({ data }) => {
      // console.log(data);
      dispatch(setAuthTokens(data));
      dispatch(setAuthCredentials(data));
      history.push("/");
    },
    onError: () => {
      showNotification("error", "Error with Login");
    },
  });
  const onSubmit = ({ email, ...rest }) => {
    login.mutate({ ...rest, email });
  };
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
      <Form layout="vertical" name="login-form" onFinish={onSubmit}>
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
          name="password"
          label={
            <div
              className={`${
                showForgetPassword
                  ? "d-flex justify-content-between w-100 align-items-center"
                  : ""
              }`}
            >
              <span>Password</span>
              {showForgetPassword && (
                <span
                  onClick={() => onForgetPasswordClick}
                  className="cursor-pointer font-size-sm font-weight-normal text-muted"
                >
                  Forget Password?
                </span>
              )}
            </div>
          }
          rules={[
            {
              required: true,
              message: "Please input your password",
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined className="text-primary" />} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Sign In
          </Button>
        </Form.Item>
        {otherSignIn}
        {/* {extra} */}
      </Form>
    </>
  );
};

LoginForm.propTypes = {
  otherSignIn: PropTypes.bool,
  showForgetPassword: PropTypes.bool,
  extra: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

LoginForm.defaultProps = {
  otherSignIn: true,
  showForgetPassword: false,
};

export default LoginForm;
