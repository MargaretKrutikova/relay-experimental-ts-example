import React from "react";
import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay/hooks";
import { Divisions } from "./Divisions";
import { CompanyFilterQuery } from "./__generated__/CompanyFilterQuery.graphql";
import { UserFilter } from "./UserFilter";
import { Roles } from "./Roles";

type Props = {
  className?: string;
};

export const CompanyFilter: React.FC<Props> = ({ className }) => {
  const data = useLazyLoadQuery<CompanyFilterQuery>(
    graphql`
      query CompanyFilterQuery {
        viewer {
          ...Divisions_data
          ...Roles_data
          ...UserFilter_data
        }
      }
    `,
    {}
  );

  return (
    <div className={className}>
      <h2>Company filter</h2>

      <div className="App-company-filter">
        <Divisions data={data.viewer} />
        <Roles data={data.viewer} />
      </div>
      <UserFilter data={data.viewer} />
    </div>
  );
};
