import graphql from "babel-plugin-relay/macro";
import React from "react";
import { useFragment } from "react-relay/hooks";
import { UserList_data$key } from "./__generated__/UserList_data.graphql";
import { User } from "./User";

const userListFragment = graphql`
  fragment UserList_data on Viewer {
    allUsers {
      edges {
        node {
          id
          ...User_user
        }
      }
    }
  }
`;

type Props = {
  data: UserList_data$key;
  className?: string;
};

export const UserList: React.FC<Props> = props => {
  const { allUsers } = useFragment(userListFragment, props.data);
  const data = allUsers.edges || [];

  return (
    <div className={props.className}>
      <h3>Users</h3>
      {data.map(user => (
        <User key={user!.node.id} user={user!.node} />
      ))}
    </div>
  );
};
