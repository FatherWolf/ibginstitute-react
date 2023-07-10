import { DocEntry } from '../models/Doc';

export async function fetchDocs(): Promise<DocEntry[]> {
  const url = `https://${process.env.REACT_APP_CONTENTFUL_BASE_URL}/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/environments/${process.env.REACT_APP_CONTENTFUL_ENVIRONMENT_ID}/entries?access_token=${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Bad response: ${response.status} ${response.statusText}`);
  }
  const json = await response.json();
  const entries = json.items as DocEntry[];

  return entries;
}

