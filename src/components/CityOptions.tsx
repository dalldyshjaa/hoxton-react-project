import { Radiobox } from "./Radiobox";

export function CityOptions({ setCityOption }: any) {
  return (
    <form
      className="city-options"
      onSubmit={(e) => {
        e.preventDefault();
        // @ts-ignore
        setCityOption(e.target.city.value);
      }}
    >
      <Radiobox
        type="radio"
        title="London"
        name="city"
        setCityOption={setCityOption}
      />
      <Radiobox
        type="radio"
        title="Amsterdam"
        name="city"
        setCityOption={setCityOption}
      />
      <Radiobox
        type="radio"
        title="New York"
        name="city"
        setCityOption={setCityOption}
      />
      <Radiobox
        type="radio"
        title="Berlin"
        name="city"
        setCityOption={setCityOption}
      />
    </form>
  );
}
