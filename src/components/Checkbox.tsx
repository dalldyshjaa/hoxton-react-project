export function Checkbox({ name, title, type }: any) {
  return (
    <div className="checkbox-unit">
      <input type={type} className="checkbox" id={name} name={name} />
      <label htmlFor={name}>{title}</label>
    </div>
  );
}
