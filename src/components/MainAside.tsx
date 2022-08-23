import { Checkbox } from "./Checkbox";
import { LocationUnit } from "./LocationUnit";

export function MainAside() {
  return (
    <aside>
      <Checkbox name={"full-time"} title={"Full time"} type="checkbox" />
      <LocationUnit />
    </aside>
  );
}
