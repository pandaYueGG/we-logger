import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "xo32ly18",
  dataset: "production",
  apiVersion: "2022-03-19",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
