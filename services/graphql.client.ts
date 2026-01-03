export async function graphqlRequest<
  TData,
  TVariables extends Record<string, unknown>
>(
  query: string,
  variables?: TVariables,
  options?: { headers?: Record<string, string> }
) {
  const config = useRuntimeConfig();
  const res = await $fetch<{ data: TData }>(config.public.graphqlEndpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(options?.headers ?? {}),
    },
    body: {
      query,
      variables: variables ?? {},
    },
  });

  return res.data;
}
