import { z } from 'zod'

const envVariables = z.object({
    DATABASE_URL: z.string(),
    SUPABASE_URL: z.string(),
    SUPABASE_KEY: z.string(),
})

envVariables.parse(process.env)

declare global {
    namespace NodeJS {
        // Property 'SOMETHING_COOL' of type 'number' is not assignable
        // to 'string' index type 'string | undefined'.
        interface ProcessEnv extends z.infer<typeof envVariables> { }
    }
}