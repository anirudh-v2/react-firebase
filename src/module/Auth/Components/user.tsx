/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { History } from "history";

export type UserProps = {
  history: History;
};

const Users: React.FC<UserProps> = ({ history }) => {
  const user = {
    userId: 1,
    name: "Anirudh",
  };

  function onClickHandle() {
    history.push("/Counter");
  }

  return (
    <div>
      <Link to={`/users/${user.userId}`}>User: {user.name}</Link>
      <Button onClick={onClickHandle}>Counter</Button>
    </div>
  );
};

export default Users;