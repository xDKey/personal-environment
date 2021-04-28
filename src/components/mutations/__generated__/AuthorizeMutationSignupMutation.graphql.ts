/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AuthorizeMutationSignupMutationVariables = {
    name: string;
    email: string;
    password: string;
};
export type AuthorizeMutationSignupMutationResponse = {
    readonly signup: {
        readonly token: string | null;
        readonly user: {
            readonly name: string;
            readonly id: string;
        } | null;
    } | null;
};
export type AuthorizeMutationSignupMutation = {
    readonly response: AuthorizeMutationSignupMutationResponse;
    readonly variables: AuthorizeMutationSignupMutationVariables;
};



/*
mutation AuthorizeMutationSignupMutation(
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
    "name": "AuthorizeMutationSignupMutation",
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
    "name": "AuthorizeMutationSignupMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "ae37c4a8cee2fc24d92186f6d9ac5941",
    "id": null,
    "metadata": {},
    "name": "AuthorizeMutationSignupMutation",
    "operationKind": "mutation",
    "text": "mutation AuthorizeMutationSignupMutation(\n  $name: String!\n  $email: String!\n  $password: String!\n) {\n  signup(name: $name, email: $email, password: $password) {\n    token\n    user {\n      name\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e309aa183d7b427bb6e8124944de4d0c';
export default node;
