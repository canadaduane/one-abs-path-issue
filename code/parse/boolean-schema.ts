import { z } from 'zod'

export const booleanSchema = z.object({
  boolean: z.boolean(),
})
