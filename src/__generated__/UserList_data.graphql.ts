/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserList_data = {
    readonly allUsers: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": FragmentRefs<"User_user">;
            };
        } | null> | null;
    };
    readonly " $refType": "UserList_data";
};
export type UserList_data$data = UserList_data;
export type UserList_data$key = {
    readonly " $data"?: UserList_data$data;
    readonly " $fragmentRefs": FragmentRefs<"UserList_data">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "UserList_data",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "id",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "User_user",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
(node as any).hash = 'efff51a1a022fc4e3cf36a3c5b3ae633';
export default node;
