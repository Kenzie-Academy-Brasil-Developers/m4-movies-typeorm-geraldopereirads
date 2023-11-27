import { z } from "zod";

export const movieSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  description: z.string().nullish(),
  duration: z.number().positive().int(),
  price: z.number().positive().int(),
});

export const movieCreateSchema = movieSchema.omit({ id: true });

export const movieSchemaResponse = movieSchema.extend({});

export const moviesSchemaResponse = z.array(movieSchemaResponse);

export const movieUpdateSchema = movieCreateSchema.partial();
