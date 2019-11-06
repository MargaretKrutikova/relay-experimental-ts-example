import React from "react";
import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay/hooks";
import { Roles } from "./Roles";
import { UserFilter_data$key } from "./__generated__/UserFilter_data.graphql";

const userFilterFragment = graphql`
  fragment UserFilter_data on Viewer {
    ...Roles_data
  }
`;

type Props = {
  data: UserFilter_data$key;
  className?: string;
};

export const UserFilter: React.FC<Props> = ({ data, className }) => {
  const result = useFragment(userFilterFragment, data);

  return (
    <div className={className}>
      <h3>User Filter</h3>
      <Roles data={result} />
    </div>
  );
};
