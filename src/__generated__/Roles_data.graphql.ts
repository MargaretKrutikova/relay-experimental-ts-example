/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Roles_data = {
    readonly allRoles: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly description: string;
                readonly name: string;
            };
        } | null> | null;
    };
    readonly " $refType": "Roles_data";
};
export type Roles_data$data = Roles_data;
export type Roles_data$key = {
    readonly " $data"?: Roles_data$data;
    readonly " $fragmentRefs": FragmentRefs<"Roles_data">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Roles_data",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
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
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "id",
                  "args": null,
                  "storageKey": null
                },
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
    }
  ]
};
(node as any).hash = '9a39ca72999b0c78f4585c9a97286e23';
export default node;
