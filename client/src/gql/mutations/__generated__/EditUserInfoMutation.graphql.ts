/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type EditUserInfoMutationVariables = {
    name?: string | null;
    age?: number | null;
    bio?: string | null;
};
export type EditUserInfoMutationResponse = {
    readonly editUser: {
        readonly id: string;
    } | null;
};
export type EditUserInfoMutation = {
    readonly response: EditUserInfoMutationResponse;
    readonly variables: EditUserInfoMutationVariables;
};



/*
mutation EditUserInfoMutation(
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
    "name": "EditUserInfoMutation",
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
    "name": "EditUserInfoMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "953be52a33df1ad5f23bf218be6d1dae",
    "id": null,
    "metadata": {},
    "name": "EditUserInfoMutation",
    "operationKind": "mutation",
    "text": "mutation EditUserInfoMutation(\n  $name: String\n  $age: Int\n  $bio: String\n) {\n  editUser(name: $name, age: $age, bio: $bio) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '79944deb03abc3c07a48e1120488e865';
export default node;
