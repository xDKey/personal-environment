/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type useConditionalMutationHookMutationVariables = {
    name: string;
    email: string;
    password: string;
};
export type useConditionalMutationHookMutationResponse = {
    readonly signup: {
        readonly token: string | null;
        readonly user: {
            readonly name: string;
            readonly id: string;
        } | null;
    } | null;
};
export type useConditionalMutationHookMutation = {
    readonly response: useConditionalMutationHookMutationResponse;
    readonly variables: useConditionalMutationHookMutationVariables;
};



/*
mutation useConditionalMutationHookMutation(
  $name: String!
  $email: String!
  $password: String!
) {
  signup(name: $name, email: $email, password: $password) {
    token
    user {
      name
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v3 = [
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
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      }
    ],
    "concreteType": "AuthPayload",
    "kind": "LinkedField",
    "name": "signup",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "useConditionalMutationHookMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "useConditionalMutationHookMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "d20825665145cada66c8672638f01574",
    "id": null,
    "metadata": {},
    "name": "useConditionalMutationHookMutation",
    "operationKind": "mutation",
    "text": "mutation useConditionalMutationHookMutation(\n  $name: String!\n  $email: String!\n  $password: String!\n) {\n  signup(name: $name, email: $email, password: $password) {\n    token\n    user {\n      name\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'bd3808051d0616fd7b100da6d0f8972a';
export default node;
