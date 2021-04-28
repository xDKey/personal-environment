/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type NoteItemDeleteMutationVariables = {
    id: string;
};
export type NoteItemDeleteMutationResponse = {
    readonly deleteNote: {
        readonly id: string;
    } | null;
};
export type NoteItemDeleteMutation = {
    readonly response: NoteItemDeleteMutationResponse;
    readonly variables: NoteItemDeleteMutationVariables;
};



/*
mutation NoteItemDeleteMutation(
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
    "name": "NoteItemDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NoteItemDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3012cbde754e385458d99a4a50ea9060",
    "id": null,
    "metadata": {},
    "name": "NoteItemDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation NoteItemDeleteMutation(\n  $id: ID!\n) {\n  deleteNote(id: $id) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '44db687dedc5a31e06ba19983c674de2';
export default node;
