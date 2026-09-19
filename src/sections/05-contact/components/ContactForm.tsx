import { contactSchema, type ContactSchema } from '@/schema/contactSchema';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { contactData } from '@/data/05-contactData';
import InputField from './InputField';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchema>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    resolver: zodResolver(contactSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ContactSchema) => {
    try {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log(data);
      alert('Your message delivered successfully');
      reset();
    } catch (error) {
      console.log(error);
      alert('Error! Please try again');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fields = contactData.fields;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full rounded-xl flex flex-col items-end gap-4 lg:gap-6'
    >
      <div className='grid grid-cols-2 gap-4 w-full'>
        {fields.map((field, index) => {
          const errorMessage = errors[field.name]?.message;
          return (
            <InputField
              key={field.id}
              type={field.type}
              register={register}
              placeholder={field.label}
              name={field.name}
              errorMessage={errorMessage}
              className={index === fields.length - 1 ? 'col-span-2' : ''}
            />
          );
        })}
      </div>
      <Button
        disabled={isSubmitting}
        type='submit'
        className='py-2 px-8 h-auto w-fit flex gap-2 items-center bg-light-orange font-bold text-[35px]'
      >
        <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
      </Button>
    </form>
  );
};
export default ContactForm;
