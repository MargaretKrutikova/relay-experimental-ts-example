import React from "react";
import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay/hooks";
import { User_user$key } from "./__generated__/User_user.graphql";

const userFragment = graphql`
  fragment User_user on User {
    id
    firstName
    lastName
  }
`;

type Props = {
  user: User_user$key;
};

export const User: React.FC<Props> = props => {
  const data = useFragment(userFragment, props.user);

  return (
    <p>
      {data.firstName}, {data.lastName}
    </p>
  );
};
