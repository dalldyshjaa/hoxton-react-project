import { Checkbox } from "./Checkbox";

export function CityOptions() {
  return (
    <form className="city-options">
      <Checkbox type="radio" title="London" name="city" />
      <Checkbox type="radio" title="Amsterdam" name="city" />
      <Checkbox type="radio" title="New York" name="city" />
      <Checkbox type="radio" title="Berlin" name="city" />
    </form>
  );
}
