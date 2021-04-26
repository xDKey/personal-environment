/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AppUserNameQueryVariables = {};
export type AppUserNameQueryResponse = {
    readonly user: {
        readonly name: string;
        readonly id: string;
        readonly email: string;
    };
};
export type AppUserNameQuery = {
    readonly response: AppUserNameQueryResponse;
    readonly variables: AppUserNameQueryVariables;
};



/*
query AppUserNameQuery {
  user {
    name
    id
    email
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
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
        "name": "email",
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
    "name": "AppUserNameQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppUserNameQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "de70d28c3e677714fdca5c5cd292cc5c",
    "id": null,
    "metadata": {},
    "name": "AppUserNameQuery",
    "operationKind": "query",
    "text": "query AppUserNameQuery {\n  user {\n    name\n    id\n    email\n  }\n}\n"
  }
};
})();
(node as any).hash = 'cc86312773ac19f7e69ec82edd7594e8';
export default node;
