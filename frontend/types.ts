export interface GetFAQResults {
  data: FAQ[];
}

export interface FAQ {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  Question: string;
  Answer: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}
