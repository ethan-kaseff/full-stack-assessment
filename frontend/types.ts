export interface Welcome {
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
