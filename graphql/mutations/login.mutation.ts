export const LOGIN_MUTATION = /* GraphQL */ `
  mutation Login($input: passwordGrantInput!) {
    authViaPassword(input: $input) {
      code
      message
      result {
        accessToken
        refreshToken
        tokenType
        expiresIn
        roles
      }
    }
  }
`;
