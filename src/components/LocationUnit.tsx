import { CityOptions } from "./CityOptions";
import { LocationSearch } from "./LocationSearch";

export function LocationUnit({ setCitySearch, setCityOption }: any) {
  return (
    <div className="location-container">
      <p>LOCATION</p>
      <LocationSearch setCitySearch={setCitySearch} />
      <CityOptions setCityOption={setCityOption} />
    </div>
  );
}
