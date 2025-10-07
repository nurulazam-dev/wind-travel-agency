const ContactFormInput = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  required = true,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
    required={required}
    className="w-full p-4 bg-slate-800 text-gray-400 placeholder-gray-500 border border-gray-500 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-200"
  />
);

export default ContactFormInput;
