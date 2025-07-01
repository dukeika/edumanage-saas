// src/lib/graphqlClient.ts  (tiny helper – optional but neat)
import { generateClient } from "aws-amplify/api";
export const client = generateClient(); // lazily uses the current token
