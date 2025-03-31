import type { CollectionConfig } from 'payload'
export const Module: CollectionConfig = {
    slug: 'module',
    admin: {
        useAsTitle: 'title'
      } ,
    access: {
      read: () => true,
    },
    fields: [
      {
        name: 'title',
        type: 'text',
        required: true,
      },
      {
        name: 'question',
        type: 'array',
        fields: [
           {
               name: 'title',
               type: 'text'
           },
           {
             name: 'correct-option',
             type: 'select',
             required: true,
            
             options: [
                  {
                    label: 'One',
                    value: '1',
                  },
                  {
                    label: 'Two',
                    value: '1',
                  },
                  {
                    label: 'Three',
                    value: '1',
                  },
                  {
                    label: 'Four',
                    value: '1',
                  },
             ]
           },
           {
              name: 'option',
              type: 'array',
              minRows: 4,
              fields: [
                  {
                     name: 'title',
                     type: 'text'
                  }
              ]
           }
        ]
      }
    ],
    
  }