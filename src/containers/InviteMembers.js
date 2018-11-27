import React from "react";
import { Card } from "../components/Card/Card";
import Button from "../components/Button/Button";
import { Header } from "../components/Head/Header";
import { Footer } from "../components/Footer/Footer";
import Input from "../components/Input/Input";
export const InviteMembers = props => {
  return (
    <Card>
      <Header
        iconColor="bg-blue"
        iconType="user-friends"
        title="Invite new members"
      />
      <div className="p-20 d-flex invite-input">
        <div>
          <p className="mb-10 f-14">Email Address</p>
          <Input type="email" placeholder="Enter email address" />
        </div>
        <div>
          <p className="mb-10 f-14">Full name(optional)</p>
          <Input type="text" placeholder="Enter full name" />
        </div>
      </div>
      <div className="invite-add-item pb-20 f-14 d-flex">
        <span>
          <i className="fas fa-plus f-10" /> Add another person
        </span>
        <span>
          <i className="fas fa-plus f-10" />
          Add custom message
        </span>
      </div>
      <p className="invite-info-text paragraph-text secondary-color--light center f-14">
        You will be charged a porated amount for each new member.
        <span className="paragraph-text secondary-color--blue">
          See our billing guidelines
        </span>
      </p>
      <Footer>
        <Button className="btn--blue">Invite</Button>
      </Footer>
    </Card>
  );
};
