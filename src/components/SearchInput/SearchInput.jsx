import z from "zod/v4";

export const SearchInput = ({
  style,
  className,
  type = "text",
  name,
  value,
  onChange,
}) => {
  return (
    <input
      style={style}
      className={className}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};
