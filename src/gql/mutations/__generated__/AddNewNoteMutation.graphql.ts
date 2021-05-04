/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AddNewNoteMutationVariables = {
    title: string;
    description?: string | null;
};
export type AddNewNoteMutationResponse = {
    readonly addNote: {
        readonly id: string;
        readonly title: string;
        readonly description: string | null;
    } | null;
};
export type AddNewNoteMutation = {
    readonly response: AddNewNoteMutationResponse;
    readonly variables: AddNewNoteMutationVariables;
};



/*
mutation AddNewNoteMutation(
  $title: String!
  $description: String
) {
  addNote(title: $title, description: $description) {
    id
    title
    description
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      }
    ],
    "concreteType": "Note",
    "kind": "LinkedField",
    "name": "addNote",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddNewNoteMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "AddNewNoteMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "db0892883c5aba37c0bdfce8810360ff",
    "id": null,
    "metadata": {},
    "name": "AddNewNoteMutation",
    "operationKind": "mutation",
    "text": "mutation AddNewNoteMutation(\n  $title: String!\n  $description: String\n) {\n  addNote(title: $title, description: $description) {\n    id\n    title\n    description\n  }\n}\n"
  }
};
})();
(node as any).hash = '4fd0b32d280610d9b85430e5264a38cc';
export default node;
