import type { FieldLabel, FieldType } from '@/data/05-contactData';
import { cn } from 'cn';
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface InputFieldProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  type: FieldType;
  errorMessage?: string;
  placeholder: FieldLabel;
  className?: string;
}

const InputField = <T extends FieldValues>({
  type,
  errorMessage,
  register,
  name,
  placeholder,
  className,
}: InputFieldProps<T>) => {
  return (
    <div className={cn('flex flex-col gap-1.5 lg:gap-2', className)}>
      <div className='flex justify-between items-center'>
        {errorMessage && <p className='text-xs text-red-500'>{errorMessage}</p>}
      </div>
      {type === 'textarea' ? (
        <textarea
          id={name}
          {...register(name)}
          rows={10}
          placeholder={placeholder}
          className='focus:outline-0 px-4 py-2 bg-[#c5c5c5] placeholder:font-bold placeholder:text-black placeholder:text-xl'
        ></textarea>
      ) : (
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          {...register(name)}
          className='focus:outline-0 px-4 py-2 bg-[#c5c5c5] placeholder:font-bold placeholder:text-black placeholder:text-xl'
        />
      )}
    </div>
  );
};

export default InputField;
