/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserFilter_data = {
    readonly " $fragmentRefs": FragmentRefs<"Roles_data">;
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
    }
  ]
};
(node as any).hash = '82b214f23d0feb98454d60890e7dd134';
export default node;
