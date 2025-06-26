#!/usr/bin/env bash
set -euo pipefail

# ─────────────────────────────────────────────────────────────────────────────
# Configuration
# ─────────────────────────────────────────────────────────────────────────────

USER_POOL_ID="eu-west-2_OuXc4ZpsU"

# Temporary passwords (must satisfy your pool’s policy)
TEMP_ADMIN_PASS="AdminTemp123!"
TEMP_TEACHER_PASS="TeacherTemp123!"
TEMP_STUDENT_PASS="StudentTemp123!"
TEMP_PARENT_PASS="ParentTemp123!"

# Permanent passwords
PERM_ADMIN_PASS="Admin123!"
PERM_TEACHER_PASS="Teacher123!"
PERM_STUDENT_PASS="Student123!"
PERM_PARENT_PASS="Parent123!"

# ─────────────────────────────────────────────────────────────────────────────
# User definitions: email → role
# ─────────────────────────────────────────────────────────────────────────────

declare -A ADMINS=(
  ["admin1@school.com"]="Admin"
  ["admin2@school.com"]="Admin"
)

declare -A TEACHERS=(
  ["teacher1@school.com"]="Teacher"
  ["teacher2@school.com"]="Teacher"
)

declare -A STUDENTS=(
  ["student1@school.com"]="Student"
  ["student2@school.com"]="Student"
)

declare -A PARENTS=(
  ["parent1@school.com"]="Parent"
  ["parent2@school.com"]="Parent"
)

# ─────────────────────────────────────────────────────────────────────────────
# Functions
# ─────────────────────────────────────────────────────────────────────────────

create_and_configure_user() {
  local email="$1"
  local temp_pass="$2"
  local perm_pass="$3"
  local role="$4"

  echo "→ Creating user $email with temporary password"
  aws cognito-idp admin-create-user \
    --user-pool-id "$USER_POOL_ID" \
    --username "$email" \
    --user-attributes Name=email,Value="$email" Name=email_verified,Value=true \
    --temporary-password "$temp_pass" \
    --output text

  echo "→ Setting permanent password for $email"
  aws cognito-idp admin-set-user-password \
    --user-pool-id "$USER_POOL_ID" \
    --username "$email" \
    --password "$perm_pass" \
    --permanent \
    --output text

  echo "→ Assigning role '$role' to $email"
  aws cognito-idp admin-update-user-attributes \
    --user-pool-id "$USER_POOL_ID" \
    --username "$email" \
    --user-attributes Name=custom:userRole,Value="$role" \
    --output text

  echo "✅ Done with $email"
  echo
}

# ─────────────────────────────────────────────────────────────────────────────
# Main
# ─────────────────────────────────────────────────────────────────────────────

echo "Starting user import & configuration..."

for email in "${!ADMINS[@]}"; do
  create_and_configure_user \
    "$email" \
    "$TEMP_ADMIN_PASS" \
    "$PERM_ADMIN_PASS" \
    "${ADMINS[$email]}"
done

for email in "${!TEACHERS[@]}"; do
  create_and_configure_user \
    "$email" \
    "$TEMP_TEACHER_PASS" \
    "$PERM_TEACHER_PASS" \
    "${TEACHERS[$email]}"
done

for email in "${!STUDENTS[@]}"; do
  create_and_configure_user \
    "$email" \
    "$TEMP_STUDENT_PASS" \
    "$PERM_STUDENT_PASS" \
    "${STUDENTS[$email]}"
done

for email in "${!PARENTS[@]}"; do
  create_and_configure_user \
    "$email" \
    "$TEMP_PARENT_PASS" \
    "$PERM_PARENT_PASS" \
    "${PARENTS[$email]}"
done

echo "All users created and configured successfully."
