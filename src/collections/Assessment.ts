import type { CollectionConfig } from 'payload'

export const Assessment: CollectionConfig = {
  slug: 'assessment',
 
  fields: [
      {
        name: 'title',
        type: 'text',
        required: true
      },
    
      {
        name: "category",
        type: "relationship",
        relationTo: "module", 
        hasMany: true,
        minRows:1
      },
  ],
}
