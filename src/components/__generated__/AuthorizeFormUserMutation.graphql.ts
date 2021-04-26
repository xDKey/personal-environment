/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AuthorizeFormUserMutationVariables = {
    name: string;
    email: string;
    password: string;
};
export type AuthorizeFormUserMutationResponse = {
    readonly signup: {
        readonly token: string | null;
        readonly user: {
            readonly id: string;
            readonly name: string;
        } | null;
    } | null;
};
export type AuthorizeFormUserMutation = {
    readonly response: AuthorizeFormUserMutationResponse;
    readonly variables: AuthorizeFormUserMutationVariables;
};



/*
mutation AuthorizeFormUserMutation(
  $name: String!
  $email: String!
  $password: String!
) {
  signup(name: $name, email: $email, password: $password) {
    token
    user {
      id
      name
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
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
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
    "name": "AuthorizeFormUserMutation",
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
    "name": "AuthorizeFormUserMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "03c8bc0b72d79b18487628552a7b166a",
    "id": null,
    "metadata": {},
    "name": "AuthorizeFormUserMutation",
    "operationKind": "mutation",
    "text": "mutation AuthorizeFormUserMutation(\n  $name: String!\n  $email: String!\n  $password: String!\n) {\n  signup(name: $name, email: $email, password: $password) {\n    token\n    user {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c16d35c9792544b58524ed7318ccf06b';
export default node;
