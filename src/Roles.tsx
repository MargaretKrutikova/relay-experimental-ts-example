import graphql from "babel-plugin-relay/macro";
import React from "react";
import { useFragment } from "react-relay/hooks";
import { Roles_data$key } from "./__generated__/Roles_data.graphql";

const rolesFragment = graphql`
  fragment Roles_data on Viewer {
    allRoles {
      edges {
        node {
          id
          description
          name
        }
      }
    }
  }
`;

type Props = {
  data: Roles_data$key;
};

export const Roles: React.FC<Props> = ({ data: roles }) => {
  const { allRoles } = useFragment(rolesFragment, roles);
  const data = allRoles.edges || [];

  return (
    <div>
      <h3>Roles</h3>
      {data.map(role => (
        <div key={role!.node.id}>{role!.node.name}</div>
      ))}
    </div>
  );
};
