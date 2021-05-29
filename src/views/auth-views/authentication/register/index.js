import React from "react";
import RegisterForm from "../../components/RegisterForm";
import { Card, Row, Col } from "antd";
import { useSelector } from "react-redux";

const backgroundStyle = {
  backgroundImage: "url(/img/others/img-17.jpg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const Register = (props) => {
  const theme = useSelector((state) => state.theme.currentTheme);
  return (
    <div className="h-100" style={backgroundStyle}>
      <div className="container d-flex flex-column justify-content-center h-100">
        <Row justify="center">
          <Col xs={20} sm={20} md={20} lg={7}>
            <Card>
              <div className="my-2">
                <div className="text-center">
                  <h1>TeamHouz</h1>
                </div>
                <Row justify="center">
                  <Col xs={24} sm={24} md={20} lg={20}>
                    <RegisterForm {...props} />
                  </Col>
                </Row>
                <div className="text-center">
                  <p className="text-muted">
                    Already have an Account:
                    <a href="/auth/login"> Login</a>
                  </p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Register;
