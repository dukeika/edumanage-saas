#!/usr/bin/env bash
set -euo pipefail

# ─────────────────────────────────────────────────────────────────────────────
# Configuration
# ─────────────────────────────────────────────────────────────────────────────

USER_POOL_ID="eu-west-2_OuXc4ZpsU"

# ─────────────────────────────────────────────────────────────────────────────
# User → Group mappings
# ─────────────────────────────────────────────────────────────────────────────

declare -A USER_GROUP_MAP=(
  # Admins
  ["admin1@school.com"]="Admins"
  ["admin2@school.com"]="Admins"
  # Teachers
  ["teacher1@school.com"]="Teachers"
  ["teacher2@school.com"]="Teachers"
  # Students
  ["student1@school.com"]="Students"
  ["student2@school.com"]="Students"
  # Parents
  ["parent1@school.com"]="Parents"
  ["parent2@school.com"]="Parents"
)

# ─────────────────────────────────────────────────────────────────────────────
# Assign each user to its group
# ─────────────────────────────────────────────────────────────────────────────

echo "Assigning users to Cognito groups in pool $USER_POOL_ID…"

for email in "${!USER_GROUP_MAP[@]}"; do
  group="${USER_GROUP_MAP[$email]}"
  echo "→ Adding $email to group $group"
  aws cognito-idp admin-add-user-to-group \
    --user-pool-id "$USER_POOL_ID" \
    --username "$email" \
    --group-name "$group"
done

echo "✅ All users have been assigned to their groups."
