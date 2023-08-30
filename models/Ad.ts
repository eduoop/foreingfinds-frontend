import { File } from "./File"
import { Subcategory } from "./Subcategory"

export type Ad = {
    id: number,
    title: string,
    price: string,
    previous_price: string | null,
    description: string,
    user_id: number,
    views: number,
    created_at: string,
    updated_at: string,
    subcategory_id: number,
    subcategory: Subcategory,
    files: File[]
}