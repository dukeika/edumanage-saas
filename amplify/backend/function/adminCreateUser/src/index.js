const AWS = require("aws-sdk");
const cognito = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
  const { email, name, role, schoolID, userPoolId } = event.arguments.input;

  try {
    const user = await cognito
      .adminCreateUser({
        UserPoolId: userPoolId,
        Username: email,
        UserAttributes: [
          { Name: "email", Value: email },
          { Name: "email_verified", Value: "true" },
          { Name: "custom:role", Value: role },
          { Name: "custom:schoolID", Value: schoolID },
          { Name: "name", Value: name },
        ],
        MessageAction: "SUPPRESS", // Prevent auto email — manual onboarding
        TemporaryPassword: "FutureEd@1234", // You can customize or randomize
      })
      .promise();

    return {
      id: user.User.Username,
      email,
      name,
      role,
      schoolID,
    };
  } catch (error) {
    console.error(error);
    throw new Error("User creation failed: " + error.message);
  }
};
