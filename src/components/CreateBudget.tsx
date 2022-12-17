import { PlusOutlined } from "@ant-design/icons";
import { Modal, Button, Input, Select } from "antd";
import React from "react";
import styled from "styled-components";

interface ICreateBudget {
  isModalOpen: boolean;
  closeModal: () => void;
  showModal: () => void;
}

const CreateBudget = ({
  isModalOpen,
  closeModal,
  showModal,
}: ICreateBudget) => {
  const handleOk = () => {};
  const handleCancel = () => {
    closeModal();
  };


  return (
    <Modal
      title="New Budget"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      bodyStyle={{
        fontFamily: "Nunito Sans",
      }}
      footer={null}
    >
      <FormContainer>
        <label htmlFor="">Title</label>
        <Input />
        <br />
        <br />
        <label htmlFor="">Budget type</label>
        <Select
          style={{ width: "100%" }}
          defaultValue="monthly"
          options={[
            {
              value: "daily",
              label: "daily",
            },
            {
              value: "monthly",
              label: "monthly",
            },
            {
              value: "yearly",
              label: "yearly",
            },
          ]}
        />
        <br />
        <br />
        <label>Description</label>
      </FormContainer>
      <Input.TextArea />
      <br />
      <br />
      <Button type="primary" icon={<PlusOutlined />}>
        Add
      </Button>
    </Modal>
  );
};

const FormContainer = styled.form``;

export default CreateBudget;
