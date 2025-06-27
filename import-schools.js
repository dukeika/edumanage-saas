/**
 * import-schools.js
 *
 * Usage:
 *   npm install node-fetch@2
 *   node import-schools.js
 */

const fetch = require("node-fetch");

// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURE THESE
// ─────────────────────────────────────────────────────────────────────────────
const API_ENDPOINT =
  "https://gj3enzgrgvhufk5imqqbf442ny.appsync-api.eu-west-2.amazonaws.com/graphql";
const API_KEY = "da2-s3eb3ixtgbbghaerjab7qqeoje";

// ─────────────────────────────────────────────────────────────────────────────
// SCHOOLS TO CREATE
// ─────────────────────────────────────────────────────────────────────────────
const schools = [
  {
    id: "9077de65-4318-4c3c-a98e-1b43572acb42",
    name: "Greenwood High School",
    address: "123 Elm St, Springfield, IL",
  },
  {
    id: "8e82a59a-32f7-4436-8703-bb3c856f39c7",
    name: "Riverside Elementary",
    address: "456 River Rd, Riverside, CA",
  },
  {
    id: "0a0e5e5d-add8-4629-a18a-eb2e733afe79",
    name: "Mountainview Academy",
    address: "789 Alpine Ave, Boulder, CO",
  },
  {
    id: "cde61027-173e-47e5-947f-68f7e4b729ce",
    name: "Lakeside Middle School",
    address: "101 Lakeview Dr, Lakeside, FL",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// GRAPHQL MUTATION
// ─────────────────────────────────────────────────────────────────────────────
const mutation = `
mutation CreateSchool($input: CreateSchoolInput!) {
  createSchool(input: $input) {
    id
    name
    address
  }
}
`;

async function main() {
  console.log(`Importing ${schools.length} schools into AppSync...`);

  for (const { id, name, address } of schools) {
    process.stdout.write(`→ ${name}… `);

    const body = JSON.stringify({
      query: mutation,
      variables: { input: { id, name, address } },
    });

    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
        },
        body,
      });
      const json = await res.json();
      if (json.errors) {
        console.error(`⚠️ ${json.errors[0].message}`);
      } else {
        console.log("✅");
      }
    } catch (err) {
      console.error("❌", err.message);
    }
  }

  console.log("Done.");
}

main();
