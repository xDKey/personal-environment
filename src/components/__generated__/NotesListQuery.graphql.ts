/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type NotesListQueryVariables = {};
export type NotesListQueryResponse = {
    readonly notes: ReadonlyArray<{
        readonly id: string;
        readonly title: string;
        readonly description: string | null;
    }>;
};
export type NotesListQuery = {
    readonly response: NotesListQueryResponse;
    readonly variables: NotesListQueryVariables;
};



/*
query NotesListQuery {
  notes {
    id
    title
    description
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Note",
    "kind": "LinkedField",
    "name": "notes",
    "plural": true,
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "NotesListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "NotesListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "6139be50932f3bd2538d7f8f4c6bd9da",
    "id": null,
    "metadata": {},
    "name": "NotesListQuery",
    "operationKind": "query",
    "text": "query NotesListQuery {\n  notes {\n    id\n    title\n    description\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c53025a7fa47871ef5ec2bc903d73352';
export default node;
