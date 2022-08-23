import "../components/styles/backgroundImg.css";
import { SearchForm } from "./SearchForm";

export function Backgroundimg({ setSearch }: any) {
  return (
    <div className="background-img-container">
      <SearchForm setSearch={setSearch} />
    </div>
  );
}
