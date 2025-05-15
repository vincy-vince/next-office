import { NavLinks } from "./navlinks";
import { NavSearch } from "./navsearch";

export const Navbar = () => {
  console.log(`Navbar rendered`);

  return (
    <div>
      <NavLinks />
      <NavSearch />
    </div>
  );
};
