/* Amplify Params - DO NOT EDIT
	AUTH_EDUMANAGESAASDA694EA8_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const {
  CognitoIdentityProviderClient,
  AdminUpdateUserAttributesCommand,
} = require("@aws-sdk/client-cognito-identity-provider");

exports.handler = async (event) => {
  console.log("🔍 Event received:", JSON.stringify(event, null, 2));

  const client = new CognitoIdentityProviderClient({ region: "eu-west-2" });
  const userPoolId =
    process.env.AUTH_EDUMANAGESAASDA694EA8_USERPOOLID || "eu-west-2_OuXc4ZpsU";

  try {
    // Parse request body
    let body;
    try {
      body =
        typeof event.body === "string" ? JSON.parse(event.body) : event.body;
      console.log("📝 Parsed body:", JSON.stringify(body, null, 2));
    } catch (parseError) {
      console.error("❌ Error parsing request body:", parseError);
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
        body: JSON.stringify({
          message: "Invalid JSON in request body",
          error: parseError.message,
        }),
      };
    }

    const { email, updates } = body;

    // Validate required fields
    if (!email || !updates) {
      console.error(
        "❌ Missing required fields - email:",
        !!email,
        "updates:",
        !!updates
      );
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
        body: JSON.stringify({
          message: "Missing 'email' or 'updates' field in request.",
        }),
      };
    }

    // Build attributes array
    const attributes = Object.entries(updates).map(([key, value]) => {
      console.log(`🔧 Processing attribute: ${key} = ${value}`);
      return {
        Name: `custom:${key}`,
        Value: String(value), // Ensure value is string
      };
    });

    console.log("📋 User Pool ID:", userPoolId);
    console.log("👤 Username (email):", email);
    console.log(
      "🏷️ Attributes to update:",
      JSON.stringify(attributes, null, 2)
    );

    // Create and send command
    const command = new AdminUpdateUserAttributesCommand({
      UserPoolId: userPoolId,
      Username: email,
      UserAttributes: attributes,
    });

    console.log("🚀 Sending command to Cognito...");
    const result = await client.send(command);
    console.log("✅ Cognito response:", JSON.stringify(result, null, 2));

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
      body: JSON.stringify({
        message: "Attributes updated successfully",
        updatedAttributes: attributes.map((attr) => attr.Name),
      }),
    };
  } catch (err) {
    console.error("❌ Error details:", {
      name: err.name,
      message: err.message,
      code: err.$metadata?.httpStatusCode,
      requestId: err.$metadata?.requestId,
      stack: err.stack,
    });

    // Handle specific Cognito errors
    let errorMessage = "Internal Server Error";
    let statusCode = 500;

    if (err.name === "UserNotFoundException") {
      errorMessage = "User not found";
      statusCode = 404;
    } else if (err.name === "InvalidParameterException") {
      errorMessage = "Invalid parameters provided";
      statusCode = 400;
    } else if (err.name === "NotAuthorizedException") {
      errorMessage = "Not authorized to perform this action";
      statusCode = 403;
    }

    return {
      statusCode: statusCode,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
      body: JSON.stringify({
        message: errorMessage,
        error: err.message,
        errorType: err.name,
      }),
    };
  }
};
