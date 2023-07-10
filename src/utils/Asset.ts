import { Asset } from "contentful";

export async function getAsset(id: string) {
  const url = `https://${process.env.REACT_APP_CONTENTFUL_BASE_URL}/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/environments/${process.env.REACT_APP_CONTENTFUL_ENVIRONMENT_ID}/assets/${id}?access_token=${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Bad response: ${response.status} ${response.statusText}`);
  }

  const json = await response.json();

  return json as Asset;
}
