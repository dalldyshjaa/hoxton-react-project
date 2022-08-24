import { Checkbox } from "./Checkbox";
import { LocationUnit } from "./LocationUnit";

export function MainAside({
  setFullTime,
  setCityOption,
  setCitySearch,
  setRemote,
}: any) {
  return (
    <aside>
      <Checkbox
        name={"full-time"}
        title={"Full time"}
        type="checkbox"
        handleChange={setFullTime}
      />
      <Checkbox
        name={"remote"}
        title={"Remote"}
        type="checkbox"
        handleChange={setRemote}
      />

      <LocationUnit
        setCityOption={setCityOption}
        setCitySearch={setCitySearch}
      />
    </aside>
  );
}
