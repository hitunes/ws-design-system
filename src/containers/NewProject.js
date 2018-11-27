import React from "react";
import { Card } from "../components/Card/Card";
import Button from "../components/Button/Button";
import { Header } from "../components/Head/Header";
import { Footer } from "../components/Footer/Footer";
import Input from "../components/Input/Input";
import { Switch, Select } from "antd";

const Option = Select.Option;
export const NewProject = props => {
  return (
    <Card>
      <Header iconColor="bg-blue" iconType="paste" title="New Project" />
      <div className="p-20 d-flex new-project-input">
        <Input type="email" placeholder="Frame.io movie" />
        <Select defaultValue="product">
          <Option value="product">Design Team</Option>
        </Select>
      </div>
      <div className="new-project-options">
        <p className="paragraph-text secondary-color--deep">
          <i className="fas fa-stroopwafel" /> Anyone on your team can view this
        </p>
        <Switch
          className="toggle-checked"
          checkedChildren="PUBLIC"
          defaultChecked
        />
      </div>
      <div className="new-project-options">
        <p className="paragraph-text secondary-color--deep">
          <i className="fab fa-slack" /> Slack notification
        </p>
        <Select className="select-no-border" defaultValue="product">
          <Option value="product">#product design</Option>
        </Select>
      </div>
      <Footer>
        <Button className="btn--blue">Create project</Button>
      </Footer>
    </Card>
  );
};
