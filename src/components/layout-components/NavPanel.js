import React, { useState } from "react";
import { SettingOutlined } from "@ant-design/icons";
import { Drawer, Menu } from "antd";
import ThemeConfigurator from "./ThemeConfigurator";
import LogoutOutlined from "@ant-design/icons/lib/icons/LogoutOutlined";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions";
import { DIR_RTL } from "constants/ThemeConstant";
const NavPanel = ({ direction }) => {
  const [visible, setVisible] = useState();
  const dispatch = useDispatch();

  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item onClick={() => dispatch(logout())}>
          <LogoutOutlined color="#fff" />
        </Menu.Item>
        <Menu.Item onClick={() => setVisible(true)}>
          <SettingOutlined className="nav-icon mr-0" />
        </Menu.Item>
      </Menu>
      <Drawer
        title="Theme Config"
        placement={direction === DIR_RTL ? "left" : "right"}
        width={350}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <ThemeConfigurator />
      </Drawer>
    </>
  );
};

export default NavPanel;
