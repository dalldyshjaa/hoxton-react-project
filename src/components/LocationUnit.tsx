import { CityOptions } from "./CityOptions";
import { LocationSearch } from "./LocationSearch";

export function LocationUnit() {
  return (
    <div className="location-container">
      <p>LOCATION</p>
      <LocationSearch />
      <CityOptions />
    </div>
  );
}
