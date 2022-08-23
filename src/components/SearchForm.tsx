import "../components/styles/searchForm.css";
import { BiShoppingBag } from "react-icons/Bi";
import { Bag } from "../components/Icons";

export function SearchForm() {
  return (
    <div className="search-form-container">
      <form>
        <div className="search-left-side">
          <Bag />
          <input
            type="text"
            placeholder="Title, companies, expertise or benefits"
          />
        </div>
        <button>Search</button>
      </form>
    </div>
  );
}
