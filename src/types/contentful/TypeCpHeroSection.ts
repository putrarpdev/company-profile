import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeCpHeroSectionFields {
    contentTypeId: "cpHeroSection",
    fields: {
        header: EntryFields.Symbol;
        description: EntryFields.Text;
        image: Asset;
    }
}

export type TypeCpHeroSection = Entry<TypeCpHeroSectionFields>;
