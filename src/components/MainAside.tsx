import { Checkbox } from "./Checkbox";
import { LocationUnit } from "./LocationUnit";

export function MainAside({ setFullTime, setCityOption, setCitySearch }: any) {
  return (
    <aside>
      <Checkbox
        name={"full-time"}
        title={"Full time"}
        type="checkbox"
        setFullTime={setFullTime}
      />
      <LocationUnit
        setCityOption={setCityOption}
        setCitySearch={setCitySearch}
      />
    </aside>
  );
}
