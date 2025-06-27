#!/usr/bin/env bash
set -euo pipefail

API_ENDPOINT="https://gj3enzgrgvhufk5imqqbf442ny.appsync-api.eu-west-2.amazonaws.com/graphql"
API_KEY="da2-jc3owzvs3na4xoimx7pl4eerce"

declare -A SCHOOLS=(
  [9077de65-4318-4c3c-a98e-1b43572acb42]="Greenwood High School|123 Elm St, Springfield, IL"
  [8e82a59a-32f7-4436-8703-bb3c856f39c7]="Riverside Elementary|456 River Rd, Riverside, CA"
  [0a0e5e5d-add8-4629-a18a-eb2e733afe79]="Mountainview Academy|789 Alpine Ave, Boulder, CO"
  [cde61027-173e-47e5-947f-68f7e4b729ce]="Lakeside Middle School|101 Lakeview Dr, Lakeside, FL"
)

echo "Creating ${#SCHOOLS[@]} schools in AppSync..."

for id in "${!SCHOOLS[@]}"; do
  IFS="|" read -r name address <<< "${SCHOOLS[$id]}"
  echo -n "→ $name… "

  # build GraphQL payload
  graphql_payload=$(
    cat <<EOF
{"query":"mutation CreateSchool(\$input: CreateSchoolInput!){createSchool(input:\$input){id name address}}","variables":{"input":{"id":"$id","name":"$name","address":"$address"}}}
EOF
  )

  # call the AppSync HTTP endpoint
  resp=$(curl -s -X POST "$API_ENDPOINT" \
    -H "Content-Type: application/json" \
    -H "x-api-key: $API_KEY" \
    -d "$graphql_payload"
  )

  # output result
  if [[ $resp == *"errors"* ]]; then
    echo "⚠️  Error: $(echo "$resp" | grep -Po '"message":\s*"\K[^"]+')"
  else
    echo "✅"
  fi
done

echo "All done."
