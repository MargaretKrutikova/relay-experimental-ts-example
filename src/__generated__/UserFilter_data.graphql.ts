/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserFilter_data = {
    readonly " $fragmentRefs": FragmentRefs<"Roles_data" | "Divisions_data">;
    readonly " $refType": "UserFilter_data";
};
export type UserFilter_data$data = UserFilter_data;
export type UserFilter_data$key = {
    readonly " $data"?: UserFilter_data$data;
    readonly " $fragmentRefs": FragmentRefs<"UserFilter_data">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "UserFilter_data",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Roles_data",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Divisions_data",
      "args": null
    }
  ]
};
(node as any).hash = 'd2cb26f79aa0297b305e6589af453f04';
export default node;
