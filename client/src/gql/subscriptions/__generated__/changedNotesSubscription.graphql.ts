/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type changedNotesSubscriptionVariables = {};
export type changedNotesSubscriptionResponse = {
    readonly changedNotes: {
        readonly id: string;
        readonly title: string;
        readonly description: string | null;
    } | null;
};
export type changedNotesSubscription = {
    readonly response: changedNotesSubscriptionResponse;
    readonly variables: changedNotesSubscriptionVariables;
};



/*
subscription changedNotesSubscription {
  changedNotes {
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
    "name": "changedNotes",
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "changedNotesSubscription",
    "selections": (v0/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "changedNotesSubscription",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "1e77f67cb641de420c7812eadf568d6a",
    "id": null,
    "metadata": {},
    "name": "changedNotesSubscription",
    "operationKind": "subscription",
    "text": "subscription changedNotesSubscription {\n  changedNotes {\n    id\n    title\n    description\n  }\n}\n"
  }
};
})();
(node as any).hash = 'fc71c80d74d9d152bc2388345480dddd';
export default node;
