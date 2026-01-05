import { FC, TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  id?: string
}

const Textarea: FC<TextareaProps> = ({ id, label, ...props }) => {
  return (
    <div className="mb-4 flex w-full flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-neutral text-base">
          {label}
        </label>
      )}
      <textarea
        id={id}
        {...props}
        className="border-border bg-secondary/10 text-neutral placeholder:text-neutral/40 focus:border-accent focus:shadow-neon w-full resize-none rounded-lg border p-[10px] transition-all duration-300 focus:outline-none"
      />
    </div>
  )
}

export default Textarea
