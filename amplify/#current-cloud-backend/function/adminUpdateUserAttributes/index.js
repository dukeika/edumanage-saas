const AWS = require("aws-sdk");

exports.handler = async (event) => {
  console.log("📥 Received event:", JSON.stringify(event));

  const cognito = new AWS.CognitoIdentityServiceProvider();
  const userPoolId = process.env.AUTH_EDUMANAGESAASDA694EA8_USERPOOLID;

  if (!userPoolId) {
    console.error("❌ Missing Cognito User Pool ID in environment");
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "User pool ID not configured" }),
    };
  }

  let body;
  try {
    body = typeof event.body === "string" ? JSON.parse(event.body) : event.body;
  } catch (err) {
    console.error("❌ Invalid JSON:", err);
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Invalid request body",
        error: err.message,
      }),
    };
  }

  const { email, updates } = body;

  if (!email || !updates || typeof updates !== "object") {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Missing or invalid 'email' or 'updates'",
      }),
    };
  }

  const userAttributes = Object.entries(updates).map(([key, value]) => ({
    Name: `custom:${key}`,
    Value: value.toString(),
  }));

  try {
    await cognito
      .adminUpdateUserAttributes({
        UserPoolId: userPoolId,
        Username: email,
        UserAttributes: userAttributes,
      })
      .promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "✅ Attributes updated successfully" }),
    };
  } catch (error) {
    console.error("❌ Cognito update error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error updating user",
        error: error.message,
      }),
    };
  }
};
