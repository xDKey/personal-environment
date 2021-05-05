/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type useConditionalMutationHookLoginMutationVariables = {
    email: string;
    password: string;
};
export type useConditionalMutationHookLoginMutationResponse = {
    readonly login: {
        readonly token: string | null;
        readonly user: {
            readonly name: string;
            readonly id: string;
        } | null;
    } | null;
};
export type useConditionalMutationHookLoginMutation = {
    readonly response: useConditionalMutationHookLoginMutationResponse;
    readonly variables: useConditionalMutationHookLoginMutationVariables;
};



/*
mutation useConditionalMutationHookLoginMutation(
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
    "name": "useConditionalMutationHookLoginMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useConditionalMutationHookLoginMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8bab77eb439c9f1437111d8321e8a3d3",
    "id": null,
    "metadata": {},
    "name": "useConditionalMutationHookLoginMutation",
    "operationKind": "mutation",
    "text": "mutation useConditionalMutationHookLoginMutation(\n  $email: String!\n  $password: String!\n) {\n  login(email: $email, password: $password) {\n    token\n    user {\n      name\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a155f47645f7de4004f044cd4a69cc5e';
export default node;
