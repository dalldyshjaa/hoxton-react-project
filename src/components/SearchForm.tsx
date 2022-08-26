import "../components/styles/searchForm.css";
import { Bag } from "../components/Icons";
import { useEffect, useState } from "react";

export function SearchForm({ setSearch }: any) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearch(searchTerm);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div className="search-form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // @ts-ignore
          setSearch(e.target.text.value);
          // @ts-ignore
        }}
      >
        <div className="search-left-side">
          <Bag />
          <input
            type="text"
            placeholder="Title, companies"
            name="text"
            onChange={
              // @ts-ignore
              (e) => setSearchTerm(e.target.value)
            }
          />
        </div>
        <button>Search</button>
      </form>
    </div>
  );
}
