import { useState } from "react";

export function Radiobox({ name, title, type, setCityOption }: any) {
  const [prevChecked, setChecked] = useState(false);
  return (
    <div className="checkbox-unit">
      <input
        type={type}
        className="checkbox"
        id={title}
        name={name}
        value={title}
        onClick={(e) => {
          // @ts-ignore
          if (e.target.checked) {
            // @ts-ignore
            if (e.target.value === "All") {
              setCityOption("");
            } else {
              // @ts-ignore
              setCityOption(e.target.value);
            }
          }
        }}
      />
      <label htmlFor={title}>{title}</label>
    </div>
  );
}
