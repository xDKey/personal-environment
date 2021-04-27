/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type HomePageUserInfoQueryVariables = {};
export type HomePageUserInfoQueryResponse = {
    readonly user: {
        readonly id: string;
        readonly name: string;
        readonly email: string;
        readonly bio: string | null;
        readonly age: number | null;
    };
};
export type HomePageUserInfoQuery = {
    readonly response: HomePageUserInfoQueryResponse;
    readonly variables: HomePageUserInfoQueryVariables;
};



/*
query HomePageUserInfoQuery {
  user {
    id
    name
    email
    bio
    age
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
        "name": "id",
        "storageKey": null
      },
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
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "bio",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "age",
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
    "name": "HomePageUserInfoQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomePageUserInfoQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "b1355da3b8cc9bad01347fa30536a772",
    "id": null,
    "metadata": {},
    "name": "HomePageUserInfoQuery",
    "operationKind": "query",
    "text": "query HomePageUserInfoQuery {\n  user {\n    id\n    name\n    email\n    bio\n    age\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c771b50ba349d2159b3c9491ad107305';
export default node;
