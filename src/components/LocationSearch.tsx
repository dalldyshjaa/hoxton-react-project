import { World } from "./Icons";

export function LocationSearch({ setCitySearch }: any) {
  return (
    <form
      action=""
      className="location-form"
      onSubmit={(e) => {
        e.preventDefault();
        // @ts-ignore
        setCitySearch(e.target.text.value);
        // @ts-ignore
        e.target.reset();
      }}
    >
      <World />
      <input
        type="text"
        placeholder="City, state, zip code or country"
        name="text"
      />
    </form>
  );
}
