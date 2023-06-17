import { database } from "@/appwrite";

export const getTodosGroupedByColumn = async() => {
    const data = await database.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!
    )
    console.table(data)
}
