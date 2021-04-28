/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AuthorizeMutationLoginMutationVariables = {
    email: string;
    password: string;
};
export type AuthorizeMutationLoginMutationResponse = {
    readonly login: {
        readonly token: string | null;
        readonly user: {
            readonly name: string;
            readonly id: string;
        } | null;
    } | null;
};
export type AuthorizeMutationLoginMutation = {
    readonly response: AuthorizeMutationLoginMutationResponse;
    readonly variables: AuthorizeMutationLoginMutationVariables;
};



/*
mutation AuthorizeMutationLoginMutation(
  $email: String!
  $password: String!
) {
  login(email: $email, password: $password) {
    token
    user {
      name
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      }
    ],
    "concreteType": "AuthPayload",
    "kind": "LinkedField",
    "name": "login",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
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
          }
        ],
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
    "name": "AuthorizeMutationLoginMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AuthorizeMutationLoginMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "82ccae1a218da508c7ca7bcba11e9258",
    "id": null,
    "metadata": {},
    "name": "AuthorizeMutationLoginMutation",
    "operationKind": "mutation",
    "text": "mutation AuthorizeMutationLoginMutation(\n  $email: String!\n  $password: String!\n) {\n  login(email: $email, password: $password) {\n    token\n    user {\n      name\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'fece15f025d49673d49b0e2a2ec3f6fc';
export default node;
