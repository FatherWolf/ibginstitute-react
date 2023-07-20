import { Document } from '@contentful/rich-text-types';
import { Entry } from 'contentful';
import { objectValidate } from './Object';
import { stringValidate } from './String';

export interface Sys {
  id: string;
}

export interface ContentfulAsset {
  sys: Sys;
  title: string;
  description: string;
  file: {
    url: string;
    details: {
      size: number;
      image: {
        width: number;
        height: number;
      };
    };
    fileName: string;
    contentType: string;
  };
}

export interface Doc {
  title: string;
  category: string;
  summary: string;
  date: string;
  featuredImage: ContentfulAsset;
  body: Document;
  assets: ContentfulAsset[];
  author: string;
  content: string;
  blogContent: Document;
  videoLink: string;
  postVideoBlurb: Document;
}

export interface DocFields extends Doc {
  fields: {
    [key: string]: unknown;
  };
  contentTypeId: string;
}

export interface DocEntry extends Omit<Entry<DocFields>, 'fields'> {
  fields: DocFields;
}

export interface DocEntryCollection {
  total: number;
  skip: number;
  limit: number;
  items: DocEntry[];
}

export function docValidate(value: unknown): DocEntry {
  const object = objectValidate(value);
  stringValidate(object.fields.title);
  stringValidate(object.fields.category);
  stringValidate(object.fields.summary);
  stringValidate(object.fields.date);
  objectValidate(object.fields.featuredImage);
  objectValidate(object.fields.body);
  objectValidate(object.fields.assets);
  stringValidate(object.fields.author);
  stringValidate(object.fields.content);
  objectValidate(object.fields.blogContent);
  stringValidate(object.fields.videoLink);
  objectValidate(object.fields.postVideoBlurb);

  return value as DocEntry;
}
