import { useState, useEffect } from "react";
import { World } from "./Icons";

export function LocationSearch({ setCitySearch }: any) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setCitySearch(searchTerm);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);
  return (
    <form
      action=""
      className="location-form"
      onSubmit={(e) => {
        e.preventDefault();
        // @ts-ignore
        setCitySearch(e.target.text.value);
        // @ts-ignore
      }}
    >
      <World />
      <input
        type="text"
        placeholder="City, country"
        name="text"
        onChange={
          // @ts-ignore
          (e) => setSearchTerm(e.target.value)
        }
      />
    </form>
  );
}
