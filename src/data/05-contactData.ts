export type FieldId = 'name' | 'email' | 'message';
export type FieldName = 'name' | 'email' | 'message';
export type FieldLabel = 'Name' | 'Email' | 'Message';
export type FieldType = 'text' | 'email' | 'textarea';

interface ContactFormField {
  id: FieldId;
  name: FieldName;
  label: FieldLabel;
  placeholder: string;
  type: FieldType;
}

interface ContactData {
  title: string;
  subtitle: string;
  submitButtonText: string;
  fields: ContactFormField[];
}

export const contactData: ContactData = {
  title: 'CONNECT',
  subtitle: 'for a free consultation...',
  submitButtonText: 'Submit',
  fields: [
    {
      id: 'name',
      name: 'name',
      label: 'Name',
      placeholder: 'Name',
      type: 'text',
    },
    {
      id: 'email',
      name: 'email',
      label: 'Email',
      placeholder: 'Email',
      type: 'email',
    },
    {
      id: 'message',
      name: 'message',
      label: 'Message',
      placeholder: 'Message',
      type: 'textarea',
    },
  ],
};
