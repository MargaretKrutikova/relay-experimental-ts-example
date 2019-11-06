/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AppQueryVariables = {};
export type AppQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": FragmentRefs<"UserFilter_data" | "UserList_data">;
    };
};
export type AppQuery = {
    readonly response: AppQueryResponse;
    readonly variables: AppQueryVariables;
};



/*
query AppQuery {
  viewer {
    ...UserFilter_data
    ...UserList_data
    id
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

fragment User_user on User {
  id
  firstName
  lastName
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
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
            "name": "UserFilter_data",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "UserList_data",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
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
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "name",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allUsers",
            "storageKey": null,
            "args": null,
            "concreteType": "UserConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "UserEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "firstName",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "lastName",
                        "args": null,
                        "storageKey": null
                      }
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
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  viewer {\n    ...UserFilter_data\n    ...UserList_data\n    id\n  }\n}\n\nfragment Roles_data on Viewer {\n  allRoles {\n    edges {\n      node {\n        id\n        description\n        name\n      }\n    }\n  }\n}\n\nfragment UserFilter_data on Viewer {\n  ...Roles_data\n}\n\nfragment UserList_data on Viewer {\n  allUsers {\n    edges {\n      node {\n        id\n        ...User_user\n      }\n    }\n  }\n}\n\nfragment User_user on User {\n  id\n  firstName\n  lastName\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '3db53214bd46efe19cffbd337958a0e0';
export default node;
