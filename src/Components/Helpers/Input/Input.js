import "./Input.css";

const Input = ({ placeholder, type, disabled, className }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      className={className}
    />
  );
};

export default Input;
