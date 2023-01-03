const Input = ({ name, type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
    ></input>
  )
}

export default Input
