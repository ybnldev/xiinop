import { defineCollection, z} from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string(),
    tags: z.array(z.string()),
    link: z.string().optional(),
    featured: z.boolean().default(false),
    publishDate: z.date()
  }) 
});

export const collection = {
  projects
};
