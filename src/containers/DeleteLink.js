import React from "react";
import { Card } from "../components/Card/Card";
import Button from "../components/Button/Button";
import { Header } from "../components/Head/Header";
import { Footer } from "../components/Footer/Footer";

export const DeleteLink = props => {
  return (
    <Card>
      <Header iconColor="bg-red" iconType="delete" title="Delete the Link?" />
      <p className="paragraph-text secondary-color--deep pl-20">
        If you delete the link will be gone forever. Are you sure you want to
        proceed?
      </p>
      <Footer className="no-bg">
        <Button>Cancel</Button>
        <Button className="btn--red">Delete</Button>
      </Footer>
    </Card>
  );
};
