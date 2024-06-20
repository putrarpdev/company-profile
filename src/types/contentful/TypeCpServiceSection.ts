import type { Entry, EntryFields } from "contentful";

export interface TypeCpServiceSectionFields {
    contentTypeId: "cpServiceSection",
    fields: {
        title: EntryFields.Symbol;
        price: EntryFields.Symbol;
        description: EntryFields.Text;
        features: EntryFields.Symbol[];
    }
}

export type TypeCpServiceSection = Entry<TypeCpServiceSectionFields>;
