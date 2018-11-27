import React from "react";
import { Card } from "../components/Card/Card";
import Button from "../components/Button/Button";
import Icon from "../components/Icon/Icon";
import Input from "../components/Input/Input";

export const Password = props => {
  return (
    <Card>
      <div
        className="password-wrap center p-20"
        style={{ position: "relative" }}
      >
        <div style={{ position: "absolute", right: "0" }}>
          <Icon type="times" />
        </div>
        <div>
          <div className="d-flex justify-center mb-20">
            <Icon type="lock" className="bg-blue big-icon" />
          </div>
          <div className="title-text mb-10">
            This link is password protected
          </div>
          <p className="paragraph-text secondary-color--deep mb-20">
            Please enter the password to view this link.
          </p>
          <div className="mb-30 password-input input-no-border">
            <Input type="password" name="password" /> <br />
          </div>
          <Button className="btn--blue">Submit</Button>
        </div>
      </div>
    </Card>
  );
};
