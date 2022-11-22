import { FC, ReactElement } from 'react'

interface IProps {
  id?: string
  label?: string
  type?: null | 'pink' | 'green' | 'red' | 'gray' | 'transparent' | 'menu'
  loading?: boolean
  error?: boolean
  onClick?: () => void
}

const Button: FC<IProps> = (
  {
    id = createRandomId(),
    label = '',
    type = null,
    loading = false,
		error = false,
    onClick
  }: IProps
): ReactElement => {

  let classes = ''
  switch (type) {
    case 'green':
      classes = 'bg-cyan-500 text-white active:bg-cyan-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
      break
    case 'red':
      classes = 'text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
      break
    case 'gray':
      classes = 'text-gray-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
      break
    case 'transparent':
      classes = 'p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
      break
    case 'menu':
      classes = 'px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
      break
    default:
      classes = 'bg-cyan-500 text-white active:bg-cyan-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
  }

  return (
    <button 
      onClick={onClick} 
      disabled={loading} 
      className={classes}
    >
      { loading ? 'Loading...' : label }
    </button>
  )
}

const createRandomId = () => {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export default Button