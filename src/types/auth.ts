// src/types/auth.ts
import { CognitoUser } from "@aws-amplify/ui-react";

export interface AuthUser extends CognitoUser {
  // whatever extra you need, e.g. attributes
}
