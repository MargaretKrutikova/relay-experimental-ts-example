import graphql from "babel-plugin-relay/macro";
import React from "react";
import { useFragment } from "react-relay/hooks";
import { Divisions_data$key } from "./__generated__/Divisions_data.graphql";

const divisionsFragment = graphql`
  fragment Divisions_data on Viewer {
    allDivisions {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

type Props = {
  data: Divisions_data$key;
};

export const Divisions: React.FC<Props> = props => {
  const { allDivisions } = useFragment(divisionsFragment, props.data);
  const data = allDivisions.edges || [];

  return (
    <div>
      <h3>Divisions</h3>

      {data.map(division => (
        <div key={division!.node.id}>{division!.node.name}</div>
      ))}
    </div>
  );
};
