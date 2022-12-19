import { Form, Button, message, Input, Divider } from "antd";
import React, { useContext } from "react";
import styled from "styled-components";
import colors from "../constants/colors";
import { useState } from "react";
import { GlobalContext } from "../context/context";
import { IFormProps } from "../utils/@types";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [form] = Form.useForm();
  const { signInWithGoogle, emailSignIn, emailSignUp } =
    useContext(GlobalContext);

  const onFinish = (values: IFormProps) => {
    console.log("Success:", values);

    if (isSignUp) {
      if (values.confirmPassword === values.password) {
        emailSignUp?.(values);
      } else {
        message.error("Passwords do not match!");
      }
    } else {
      emailSignIn?.(values);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    message.error(`Authentication failed!`);
  };

  const toggleAuth = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <AuthContainer>
      <HeroContainer>
        <img src="/assets/pic1.svg" alt="" />
        <div>
          <h3>Budget Planner</h3>
          <p>
            Save,manage and track your financies using this web application
            designed for your budgeting needs.
          </p>
          <br />
          <Button type="primary" href="#auth" className="get-started-btn">
            Get started
          </Button>
        </div>
      </HeroContainer>
      <FormContainer id="auth">
        <Wrapper>
          <h3>
            {isSignUp ? "Create a new account" : "Sign in to your account"}
          </h3>
          <Form
            form={form}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
            layout="vertical"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Invalid email!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  min: 7,
                  message: "Invalid password!",
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            {isSignUp && (
              <Form.Item
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    min: 7,
                    message: "Invalid password!",
                  },
                ]}
              >
                <Input.Password placeholder="Comfirm password" />
              </Form.Item>
            )}

            <Form.Item>
              <Button type="primary" block htmlType="submit">
                {isSignUp ? "Sign Up" : "Sign In"}
              </Button>
            </Form.Item>
          </Form>
          <small onClick={toggleAuth}>
            {isSignUp
              ? "Already have an account? Sign In"
              : "Do not have an account yet? Sign Up"}
          </small>
          <DividerContainer>
            <Divider />
            <span>or</span>
            <Divider />
          </DividerContainer>
          <Button
            onClick={signInWithGoogle}
            block
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.4)",
            }}
            icon={
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt=""
                width={20}
                height={20}
                style={{ marginRight: "5px" }}
              />
            }
          >
            Sign in with Google
          </Button>
        </Wrapper>
      </FormContainer>
    </AuthContainer>
  );
};

const AuthContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  scroll-behavior: smooth;

  @media screen and (max-width: 600px) {
    & {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

const HeroContainer = styled.div`
  width: 60%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => theme.herobg};
  text-align: center;

  img {
    width: 50%;
    height: 50%;
  }

  h3 {
    font-size: 2rem;
    margin: 10px 0;
    font-family: "Lobster Two";
    color: ${colors.primary};
  }

  p {
    width: 60%;
    margin: auto;
    font-family: "Lato";
  }

  & .get-started-btn {
    display: none;
  }

  @media screen and (max-width: 600px) {
    & {
      width: 100%;
    }

    & .get-started-btn {
      display: inline-block;
    }
  }
`;

const FormContainer = styled.div`
  width: 40%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media screen and (max-width: 600px) {
    & {
      width: 100%;
    }
  }
`;

const Wrapper = styled.div`
  width: 80%;

  small {
    cursor: pointer;
  }

  h3 {
    margin-bottom: 2rem;
    text-align: center;
  }

  form {
    width: 100%;
  }
`;

const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 20px;

  span {
    margin: 0px 5px;
  }
`;

export default Auth;
