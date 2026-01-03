import type { ResultAuthenticateData } from "~/dtos/ResultAuthenticateData";
import { LOGIN_MUTATION } from "~/graphql/mutations/login.mutation";
import { graphqlRequest } from "~/services/graphql.client";
import type { PasswordGrantInput } from "~/dtos/PasswordGrantInput";

type LoginMutationVars = {
  input: PasswordGrantInput;
};

export function useAuth() {
  const token = useCookie<string | null>("auth_token");
  const refreshToken = useCookie<string | null>("refresh_token");
  const roles = useState<string[]>("auth_roles", () => []);

  const isAuthenticated = computed(() => Boolean(token.value));

  const config = useRuntimeConfig();
  const user: PasswordGrantInput = {
    username: config.public.authUsername,
    password: config.public.authPassword,
  };
  async function login() {
    const data = await graphqlRequest<
      ResultAuthenticateData,
      LoginMutationVars
    >(LOGIN_MUTATION, {
      input: { username: user.username, password: user.password },
    });

    const payload = data.authViaPassword;
    const result = payload?.result ?? null;

    if (!result?.accessToken) {
      throw new Error(payload?.message || "Login failed.");
    }

    token.value = result.accessToken;
    refreshToken.value = result.refreshToken ?? null;
    roles.value = result.roles ?? [];

    return payload;
  }

  return {
    token,
    refreshToken,
    roles,
    isAuthenticated,
    login,
  };
}
