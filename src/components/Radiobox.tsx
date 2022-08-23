export function Radiobox({ name, title, type, setCityOption }: any) {
  return (
    <div className="checkbox-unit">
      <input
        type={type}
        className="checkbox"
        id={name}
        name={name}
        value={title}
        onChange={(e) => {
          if (e.target.checked) {
            setCityOption(e.target.value);
          }
        }}
      />
      <label htmlFor={name}>{title}</label>
    </div>
  );
}
