// schema.js (Sanity schema)

export default {
  name: 'chatbot',
  type: 'document',
  title: 'Chatbot',
  fields: [
    {
      name: 'steps',
      type: 'array',
      title: 'Steps',
      of: [{ type: 'step' }],
    },
  ],
};

// Step type
export const step = {
  name: 'step',
  type: 'object',
  fields: [
    {
      name: 'id',
      type: 'string',
      title: 'ID',
    },
    {
      name: 'message',
      type: 'string',
      title: 'Message',
    },
    {
      name: 'user',
      type: 'boolean',
      title: 'User',
    },
    {
      name: 'options',
      type: 'array',
      title: 'Options',
      of: [{ type: 'option' }],
    },
    {
      name: 'trigger',
      type: 'string',
      title: 'Trigger',
    },
  ],
};

// Option type
export const option = {
  name: 'option',
  type: 'object',
  fields: [
    {
      name: 'value',
      type: 'string',
      title: 'Value',
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'trigger',
      type: 'string',
      title: 'Trigger',
    },
  ],
};
