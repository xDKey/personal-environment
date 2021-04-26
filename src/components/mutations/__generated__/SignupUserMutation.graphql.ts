/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SignupUserMutationVariables = {
    name: string;
    email: string;
    password: string;
};
export type SignupUserMutationResponse = {
    readonly signup: {
        readonly token: string | null;
        readonly user: {
            readonly name: string;
            readonly id: string;
        } | null;
    } | null;
};
export type SignupUserMutation = {
    readonly response: SignupUserMutationResponse;
    readonly variables: SignupUserMutationVariables;
};



/*
mutation SignupUserMutation(
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
    "name": "SignupUserMutation",
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
    "name": "SignupUserMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "99f11408ecbec2df8e8e5da564c9c7d2",
    "id": null,
    "metadata": {},
    "name": "SignupUserMutation",
    "operationKind": "mutation",
    "text": "mutation SignupUserMutation(\n  $name: String!\n  $email: String!\n  $password: String!\n) {\n  signup(name: $name, email: $email, password: $password) {\n    token\n    user {\n      name\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '1d4db3ee86f910c9afbba99c33f8903f';
export default node;
