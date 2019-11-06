/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CompanyFilterQueryVariables = {};
export type CompanyFilterQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": FragmentRefs<"Divisions_data" | "Roles_data" | "UserFilter_data">;
    };
};
export type CompanyFilterQuery = {
    readonly response: CompanyFilterQueryResponse;
    readonly variables: CompanyFilterQueryVariables;
};



/*
query CompanyFilterQuery {
  viewer {
    ...Divisions_data
    ...Roles_data
    ...UserFilter_data
    id
  }
}

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

fragment UserFilter_data on Viewer {
  ...Roles_data
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CompanyFilterQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Divisions_data",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "Roles_data",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "UserFilter_data",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CompanyFilterQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allDivisions",
            "storageKey": null,
            "args": null,
            "concreteType": "DivisionConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "DivisionEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Division",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      (v1/*: any*/)
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allRoles",
            "storageKey": null,
            "args": null,
            "concreteType": "RoleConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "RoleEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Role",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "description",
                        "args": null,
                        "storageKey": null
                      },
                      (v1/*: any*/)
                    ]
                  }
                ]
              }
            ]
          },
          (v0/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CompanyFilterQuery",
    "id": null,
    "text": "query CompanyFilterQuery {\n  viewer {\n    ...Divisions_data\n    ...Roles_data\n    ...UserFilter_data\n    id\n  }\n}\n\nfragment Divisions_data on Viewer {\n  allDivisions {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment Roles_data on Viewer {\n  allRoles {\n    edges {\n      node {\n        id\n        description\n        name\n      }\n    }\n  }\n}\n\nfragment UserFilter_data on Viewer {\n  ...Roles_data\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'baeb974d21b6091ca5bac5f34a1c716d';
export default node;
