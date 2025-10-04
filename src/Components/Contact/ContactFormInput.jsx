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
    className="w-full p-4 bg-gray-700 text-white placeholder-gray-400 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-200"
  />
);

export default ContactFormInput;
