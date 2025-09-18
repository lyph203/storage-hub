export const appwriteConfig = {
    endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
    projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!,
    databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
    usersCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USERS_TABLE_ID!,
    filesCollectionId: process.env.NEXT_PUBLIC_APPWRITE_FILES_TABLE_ID!,
    bucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET!,
    secretKey: process.env.NEXT_APPWRITE_SECRET!,
    
}