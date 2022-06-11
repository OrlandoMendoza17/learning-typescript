import { ROLES } from "../modules/types";

const { ADMIN, SELLER, USER } = ROLES;

console.log("Object:     ", ROLES);
console.log("Array:      ", Object.values(ROLES));

const currentUser = {
  name: "orlando",
  role: ROLES.ADMIN,
};

const verifyRole = (...roles: string[]) => {
  console.log("Rest param: ", roles);

  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

console.log("includes role: ", verifyRole(ADMIN, USER, SELLER));
