import type { Entry, EntryFields } from "contentful";

export interface TypeCpCompanySectionFields {
    contentTypeId: "cpCompanySection",
    fields: {
        title: EntryFields.Symbol;
        description: EntryFields.Text;
    }
}

export type TypeCpCompanySection = Entry<TypeCpCompanySectionFields>;
