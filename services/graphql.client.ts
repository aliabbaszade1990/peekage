export async function graphqlRequest<TData, TVariables extends object>(
  query: string,
  variables?: TVariables,
  options?: { headers?: Record<string, string> }
) {
  const config = useRuntimeConfig();
  const { token } = useAuth();

  const headers: Record<string, string> = {
    "content-type": "application/json",
    ...(options?.headers ?? {}),
  };

  if (token.value) {
    headers.Authorization = `Bearer ${token.value}`;
  }

  const res = await $fetch<{ data: TData }>(config.public.graphqlEndpoint, {
    method: "POST",
    headers,
    body: {
      query,
      variables: variables ?? {},
    },
  });

  return res.data;
}
