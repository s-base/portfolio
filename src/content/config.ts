import { defineCollection, z } from 'astro:content'

export const collections = {
  work: defineCollection({
    type: 'content',
    schema: z.object({
      description: z.string(),
      featured: z.boolean().optional(),
      img: z.string(),
      img_alt: z.string(),
      isMainSection: z.boolean().optional(),
      sectionTitle: z.string().optional(),
      publishDate: z.coerce.date(),
      tags: z.array(z.string()),
      title: z.string(),
      video: z.string().optional(),
    })
  })
}
