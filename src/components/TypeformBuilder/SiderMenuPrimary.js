import React, { useState, useRef } from "react";
import { Layout, Menu, Row, Col, Button, Radio } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined
} from "@ant-design/icons";
import styled from "styled-components";

import { ReactTypeformEmbed } from "react-typeform-embed";

import { QuestionBlockViewPrimary } from "./index";

const typeformEmbedStyleObj = {
  position: "static",
  width: "100%",
  height: "550px"
};

const typeformURL = "https://artyrkapochinok.typeform.com/to/BPYoCa";

const handleTypeFormSubmit = () => {
  console.log("Typeform successfylly submitted!");
};

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

function SiderMenuPrimary() {
  const [isMenuPrimaryCollapsed, setIsMenuPrimaryCollapsed] = useState(true);

  const handleMenuPrimaryCollapse = collapsed => {
    setIsMenuPrimaryCollapsed(collapsed);
  };

  const [contentKey, setContentKey] = useState("1");
  const handleMenuPrimaryClick = e => {
    setContentKey(e.key);
  };

  const typeformEmbedRef = useRef();
  const [typeformEmbedPopupType, setTypeformEmbedPopupType] = useState("popup");
  const handleRadioChange = e => setTypeformEmbedPopupType(e.target.value);

  // const [typeformShowState, setTypeformShowState] = useState()
  const handleTypeformShowStateChange = () => {
    typeformEmbedRef.current.typeform.open();
  };

  function SideMenuPrimaryContent({ contentKey }) {
    switch (contentKey) {
      case "1":
        return [1, 2, 3].map(el => <QuestionBlockViewPrimary />);
      case "2":
        return <div>Design builder here...</div>;
      case "3":
        return (
          <React.Fragment>
            <Row justify="center" style={{ marginBottom: "16px" }}>
              <Col>
                <Radio.Group
                  onChange={handleRadioChange}
                  value={typeformEmbedPopupType}
                >
                  <Radio value="popup">Popup</Radio>
                  <Radio value="drawer_left">Drawer left</Radio>
                  <Radio value="drawer_right">Drawer right</Radio>
                </Radio.Group>
              </Col>
            </Row>

            <Row gutter={[16, 16]} justify="center" align="middle">
              <Col>
                <Button type="primary" onClick={handleTypeformShowStateChange}>
                  Show form
                </Button>
              </Col>
            </Row>

            <Row>
              <Col>
                <ReactTypeformEmbed
                  popup
                  mode={typeformEmbedPopupType}
                  autoOpen={false}
                  url="https://demo.typeform.com/to/njdbt5"
                  hideHeaders
                  hideFooter
                  buttonText="Go!"
                  style={{ top: 100 }}
                  ref={typeformEmbedRef}
                />
              </Col>
            </Row>
          </React.Fragment>
        );
      case "4":
        return (
          <ReactTypeformEmbed
            hideFooter
            url={typeformURL}
            style={typeformEmbedStyleObj}
            onSubmit={handleTypeFormSubmit}
          />
        );
      default:
        return "foo";
    }
  }

  const LayoutStyled = styled(Layout)`
    min-height: ${props => (props.primary ? "100vh" : "auto")};
    background-color: "white";
  `;

  return (
    <LayoutStyled primary>
      <Sider
        collapsible
        collapsed={isMenuPrimaryCollapsed}
        onCollapse={handleMenuPrimaryCollapse}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          onClick={handleMenuPrimaryClick}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Builder
          </Menu.Item>
          <Menu.Item key="2" icon={<FileOutlined />}>
            Design
          </Menu.Item>

          <SubMenu
            key="sub1"
            icon={<DesktopOutlined />}
            title="Embed form view"
          >
            <Menu.Item key="3">Popup variant</Menu.Item>
            <Menu.Item key="4">Widget variant</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <LayoutStyled>
        {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
        <Content style={{ margin: "16px 16px 0" }}>
          <SideMenuPrimaryContent contentKey={contentKey} />
        </Content>
        {/* <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer> */}
      </LayoutStyled>
    </LayoutStyled>
  );
}

export default SiderMenuPrimary;
