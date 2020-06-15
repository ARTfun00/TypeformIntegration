import React from "react";
import { Row, Col, Button, Input } from "antd";
import styled from "styled-components";

const { TextArea } = Input;

const QuestionBlockContainer = styled.div`
  &:hover {
    background-color: #f0f2f5;
  }
  &:active {
    background-color: #f0f2f5;
  }
`;
const RequiredContainer = styled.div`
  min-width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function QuestionBlockViewPrimary() {
  return (
    <QuestionBlockContainer>
      <Row gutter={[16, 16]}>
        <Col style={{ display: "flex", alignItems: "start" }}>
          <RequiredContainer>*</RequiredContainer>
          <IconContainer>Icon</IconContainer>
        </Col>

        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TextArea
            placeholder="Type question here..."
            style={{ resize: "none", border: 0, minWidth: "300px" }}
            rows={3}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]} justify="end" align="middle">
        <Col>actions ==></Col>
        <Col>
          <Button>#1</Button>
          <Button>#2</Button>
          <Button>#3</Button>
          <Button>#4</Button>
          <Button>#5</Button>
        </Col>
      </Row>
    </QuestionBlockContainer>
  );
}

export default QuestionBlockViewPrimary;
