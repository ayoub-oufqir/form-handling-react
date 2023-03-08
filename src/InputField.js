import { useEffect } from "react";
const InputField = ({ label, onChange, data, ...item}) => {
  useEffect(() => {
    console.log(item);
  }, []);

  return (
    <>
      <label htmlFor={item.id}>{label}</label>
      <input
        {...item}
        onChange={onChange}
        className="border-2 ml-auto rounded-md p-1"
      />
      <br />
    </>
  );
};

export default InputField;
