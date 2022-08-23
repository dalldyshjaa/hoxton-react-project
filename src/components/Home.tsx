import { useState } from "react";
import { Header } from "./Header";
import { Main } from "./Main";

export function Home() {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="container">
        <Header setSearch={setSearch} />
        <Main search={search} />
      </div>
    </>
  );
}
