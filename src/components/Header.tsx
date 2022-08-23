import { Backgroundimg } from "./Backgroundimg";
import { Logo } from "./Logo";

export function Header({ setSearch }: any) {
  return (
    <header>
      <Logo />
      <Backgroundimg setSearch={setSearch} />
    </header>
  );
}
