const AWS = require("aws-sdk");

exports.handler = async (event) => {
  const cognito = new AWS.CognitoIdentityServiceProvider();

  // ✅ Hardcoded User Pool ID
  const userPoolId = "eu-west-2_OuXc4ZpsU";

  const { email, updates } = JSON.parse(event.body || "{}");

  if (!email || !updates || typeof updates !== "object") {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "❌ Missing email or updates payload" }),
    };
  }

  const attributes = Object.entries(updates).map(([key, value]) => ({
    Name: `custom:${key}`,
    Value: value,
  }));

  try {
    await cognito
      .adminUpdateUserAttributes({
        UserPoolId: userPoolId,
        Username: email,
        UserAttributes: attributes,
      })
      .promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "✅ Attributes updated successfully" }),
    };
  } catch (err) {
    console.error("❌ Error updating user attributes:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "❌ Failed to update attributes",
        error: err.message,
      }),
    };
  }
};
