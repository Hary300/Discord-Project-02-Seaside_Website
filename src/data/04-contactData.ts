type FieldId = 'name' | 'email' | 'message';
type FieldName = 'name' | 'email' | 'message';
type FieldLabel = 'Name' | 'Email' | 'Message';

interface ContactFormField {
  id: FieldId;
  name: FieldName;
  label: FieldLabel;
  placeholder: string;
  type: 'text' | 'email' | 'textarea';
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
