import "../components/styles/searchForm.css";
import { BiShoppingBag } from "react-icons/Bi";
import { Bag } from "../components/Icons";

export function SearchForm({ setSearch }: any) {
  return (
    <div className="search-form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // @ts-ignore
          setSearch(e.target.text.value);
          // @ts-ignore
          e.target.reset();
        }}
      >
        <div className="search-left-side">
          <Bag />
          <input
            type="text"
            placeholder="Title, companies, expertise or benefits"
            name="text"
          />
        </div>
        <button>Search</button>
      </form>
    </div>
  );
}
