export function Checkbox({ name, title, type, handleChange }: any) {
  return (
    <div className="checkbox-unit">
      <input
        type={type}
        className="checkbox"
        id={name}
        name={name}
        onChange={(e) => {
          handleChange(e.target.checked);
        }}
      />
      <label htmlFor={name}>{title}</label>
    </div>
  );
}
