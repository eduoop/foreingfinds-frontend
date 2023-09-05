import { File } from "./File"
import { ProductCategory } from "./ProductCategory"
import { Subcategory } from "./Subcategory"
import { User } from "./user"

export type Ad = {
    id: number,
    title: string,
    price: number,
    previous_price: number | null,
    description: string,
    user_id: number,
    views: number,
    created_at: string,
    updated_at: string,
    subcategory_id: number,
    subcategory: Subcategory,
    productCategory: ProductCategory,
    files: File[],
    user: User
}