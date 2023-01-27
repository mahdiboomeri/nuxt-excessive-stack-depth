import { createTRPCProxyClient, httpLink } from "@trpc/client";

export default defineNuxtPlugin(() => {
  const client = createTRPCProxyClient<any>({
    links: [
      httpLink({
        url: "",
      }),
    ],
  });

  return {
    provide: {
      client,
    },
  };
});
