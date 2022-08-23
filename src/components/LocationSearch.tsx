import { World } from "./Icons";

export function LocationSearch() {
  return (
    <form action="" className="location-form">
      <World />
      <input type="text" placeholder="City, state, zip code or country" />
    </form>
  );
}
