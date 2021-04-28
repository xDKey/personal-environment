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
    "cacheID": "2e795df1ea009c69bd8e8ab0edff89e0",
    "id": null,
    "metadata": {},
    "name": "AddNewNoteMutation",
    "operationKind": "mutation",
    "text": "mutation AddNewNoteMutation(\n  $title: String!\n  $description: String\n) {\n  addNote(title: $title, description: $description) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '74ee0173b1eecb6f024bd0b9c83da6a3';
export default node;
