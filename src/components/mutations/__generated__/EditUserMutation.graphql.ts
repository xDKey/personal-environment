/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type EditUserMutationVariables = {
    name?: string | null;
    age?: number | null;
    bio?: string | null;
};
export type EditUserMutationResponse = {
    readonly editUser: {
        readonly id: string;
    } | null;
};
export type EditUserMutation = {
    readonly response: EditUserMutationResponse;
    readonly variables: EditUserMutationVariables;
};



/*
mutation EditUserMutation(
  $name: String
  $age: Int
  $bio: String
) {
  editUser(name: $name, age: $age, bio: $bio) {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "age"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "bio"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "age",
        "variableName": "age"
      },
      {
        "kind": "Variable",
        "name": "bio",
        "variableName": "bio"
      },
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "editUser",
    "plural": false,
    "selections": [
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
    "name": "EditUserMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "EditUserMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "ce1194b162194614dbe150c9fb8a31ab",
    "id": null,
    "metadata": {},
    "name": "EditUserMutation",
    "operationKind": "mutation",
    "text": "mutation EditUserMutation(\n  $name: String\n  $age: Int\n  $bio: String\n) {\n  editUser(name: $name, age: $age, bio: $bio) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '99ddc2658751134e9b211c85e7703e3a';
export default node;
