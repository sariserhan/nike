const Button = ({
  label,
  iconURL,
  backGroundColor = "bg-coral-red",
  borderColor = "border-coral-red",
  textColor = "text-white"
}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border ${borderColor} font-montserrat text-lg leading-none ${backGroundColor} ${textColor} rounded-full`}>
        {label}
        {iconURL &&
          <img src={iconURL} alt="Arrow right icon" width={20} height={20} className="ml-2 rounded-full w-5 h-5"/>
        }
    </button>
  )
}

export default Button
