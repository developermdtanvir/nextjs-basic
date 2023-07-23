
const Button = ({children,handler}) => {
  return   <button onClick={handler} id="incriment" class="py-2 px-4 bg-sky-400 rounded-md text-white font-semibold">{children}</button>
}

export default Button