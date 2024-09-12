import clsx from 'clsx';
import { ChangeEvent, useRef } from 'react';

const Input = ({
  name,
  className,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  onBlur,
  error = false,
  errorMessage,
  options,
}: {
  name: string;
  className?: string;
  type?: 'text' | 'select' | 'textarea';
  placeholder?: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  error?: boolean;
  errorMessage?: string;
  options?: string[];
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const autoHeight = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!textAreaRef.current) return;

    if (e.target.value === '') {
      textAreaRef.current.style.height = '120px';
    } else {
      textAreaRef.current.style.height = e.target.scrollHeight + 1 + 'px';
    }
  };

  return (
    <div className={clsx('relative flex flex-col gap-4', className)}>
      {type === 'textarea' && (
        <textarea
          id={name}
          placeholder={placeholder}
          value={value}
          ref={textAreaRef}
          onBlur={onBlur}
          onChange={(e) => {
            autoHeight(e);
            onChange(e);
          }}
          className={clsx(
            'blur-filter blur-medium text2 text-placeholder h-[120px] w-full resize-none border-b !bg-transparent p-4 transition-[height] focus:outline-none',
            error ? 'border-b-red-500' : 'border-b-black',
          )}
        />
      )}
      {type === 'select' && options && (
        <select
          id={name}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          className={clsx(
            'blur-filter blur-medium text2 text-placeholder relative w-full border-b !bg-transparent p-4 focus:outline-none',
            error ? 'border-b-red-500' : 'border-b-black',
          )}
        >
          <option value={placeholder} disabled>
            {placeholder || 'Choisir une option'}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      {type === 'text' && (
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          className={clsx(
            'blur-filter blur-medium text2 text-placeholder w-full border-b !bg-transparent p-4 focus:outline-none',
            error ? 'border-b-red-500' : 'border-b-black',
          )}
        />
      )}
      <p className="absolute -bottom-5 text-xs text-red-500">{errorMessage}</p>
    </div>
  );
};

export default Input;
