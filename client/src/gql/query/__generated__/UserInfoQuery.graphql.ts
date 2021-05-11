/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserInfoQueryVariables = {};
export type UserInfoQueryResponse = {
    readonly user: {
        readonly id: string;
        readonly name: string;
        readonly email: string;
        readonly bio: string | null;
        readonly age: number | null;
    };
};
export type UserInfoQuery = {
    readonly response: UserInfoQueryResponse;
    readonly variables: UserInfoQueryVariables;
};



/*
query UserInfoQuery {
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
    "name": "UserInfoQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UserInfoQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "3cca1cd3f09b5b3d12cb8dacedf63cbe",
    "id": null,
    "metadata": {},
    "name": "UserInfoQuery",
    "operationKind": "query",
    "text": "query UserInfoQuery {\n  user {\n    id\n    name\n    email\n    bio\n    age\n  }\n}\n"
  }
};
})();
(node as any).hash = '1d2ca3cd7481ca1c519e19dc5d66f3d2';
export default node;
