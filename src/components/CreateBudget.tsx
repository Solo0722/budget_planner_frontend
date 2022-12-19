import { PlusCircleFilled, PlusOutlined } from "@ant-design/icons";
import { Modal, Button, Input, Select, Form } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { ICreateBudget } from "../utils/@types";

const CreateBudget = ({
  isModalOpen,
  closeModal,
  showModal,
}: ICreateBudget) => {
  const [form] = Form.useForm();

  const onFinish = (values: {
    title: string;
    description: string;
    budgetType: string;
  }) => {
    console.log("Success:", values);

    form.resetFields();
    closeModal();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleOk = () => {};
  const handleCancel = () => {
    closeModal();
  };

  return (
    <Modal
      title="New Budget"
      open={isModalOpen}
      onCancel={handleCancel}
      onOk={handleOk}
      bodyStyle={{
        fontFamily: "Nunito Sans",
      }}
      footer={null}
    >
      <FormContainer>
        <Form
          name="basic"
          form={form}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
          layout="vertical"
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Invalid title!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Budget Type"
            name="budgetType"
            rules={[
              {
                required: true,
                message: "Invalid budget Type!",
              },
            ]}
          >
            <Select
              style={{ width: "100%" }}
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
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Invalid description!",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              icon={<PlusCircleFilled />}
            >
              Add
            </Button>
          </Form.Item>
        </Form>
      </FormContainer>
    </Modal>
  );
};

const FormContainer = styled.div``;

export default CreateBudget;
