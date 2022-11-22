import { FC, ReactElement } from 'react'
interface IProps {
  id?: string
  type?: string
  label?: string
  placeholder?: string
  value?: string
  disabled?: boolean
  error?: boolean
  onChange?: (event: any) => void
}

const Textbox: FC<IProps> = (
  {
    id = createRandomId(),
    type = 'text',
    label = '',
    placeholder = '',
		value = '',
		disabled = false,
		error = false,
    onChange
  }: IProps
): ReactElement => {
  return (
  <div className='mb-3 pt-0'>
    <label 
      htmlFor={id} 
      className='text-black block mb-2 text-sm font-medium text-gray-900'
    >
      {label}
    </label>
    <input 
      type={type} 
      id={id} 
      onChange={onChange} 
      placeholder={placeholder} 
      value={value} 
      required 
      className='px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full' 
    />
  </div>
  )
}

const createRandomId = () => {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export default Textbox