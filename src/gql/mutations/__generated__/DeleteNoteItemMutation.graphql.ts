/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type DeleteNoteItemMutationVariables = {
    id: string;
};
export type DeleteNoteItemMutationResponse = {
    readonly deleteNote: {
        readonly id: string;
    } | null;
};
export type DeleteNoteItemMutation = {
    readonly response: DeleteNoteItemMutationResponse;
    readonly variables: DeleteNoteItemMutationVariables;
};



/*
mutation DeleteNoteItemMutation(
  $id: ID!
) {
  deleteNote(id: $id) {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Note",
    "kind": "LinkedField",
    "name": "deleteNote",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteNoteItemMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteNoteItemMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c46a31d9b007f4167a342d727b1c47bd",
    "id": null,
    "metadata": {},
    "name": "DeleteNoteItemMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteNoteItemMutation(\n  $id: ID!\n) {\n  deleteNote(id: $id) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '643039f6d1860dbee3bb32aadd0eec16';
export default node;
