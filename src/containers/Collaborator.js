import React from "react";
import { Card } from "../components/Card/Card";
import Button from "../components/Button/Button";
import { Header } from "../components/Head/Header";
import { Footer } from "../components/Footer/Footer";

export const Collaborator = props => {
  return (
    <Card>
      <Header
        iconColor="bg-orange"
        iconType="exclamation-circle"
        title="Collaborator cannot share"
      />
      <p className="paragraph-text secondary-color--deep pl-20">
        You are currently a collaborator on Team name. <br /> Sharing is only
        available to Team members.
      </p>
      <Footer className="no-bg">
        <Button className="btn--blue">Dismiss</Button>
      </Footer>
    </Card>
  );
};
