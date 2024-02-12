import { defineCollection, z } from 'astro:content'

export const collections = {
  work: defineCollection({
    type: 'content',
    schema: z.object({
      description: z.string(),
      featured: z.boolean().optional(),
      img_alt: z.string().optional(),
      img: z.string(),
      publishDate: z.coerce.date(),
      tags: z.array(z.string()),
      title: z.string(),
    })
  })
}
