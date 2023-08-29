import { Subcategory } from "./Subcategory";

export type ProductCategory = {
    created_at: string;
    id: number;
    name: string;
    subcategories: Subcategory[]
    updated_at: string
}