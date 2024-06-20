import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeCpTestimonyFields {
  contentTypeId: "cpTestimony",
  fields: {
    authorName: EntryFields.Symbol;
    authorTitle: EntryFields.Symbol;
    authorImage: Asset
    quote: EntryFields.Text
  }
}

export type TypeCpTestimony = Entry<TypeCpTestimonyFields>;
