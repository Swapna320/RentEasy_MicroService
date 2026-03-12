export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const getRole = () => {
  const user = getUser();
  return user?.role;
};

export const isLoggedIn = () => {
  return !!localStorage.getItem("user");
};

export const logout = () => {
  localStorage.removeItem("user");
};