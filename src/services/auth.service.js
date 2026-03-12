const USERS_KEY = "mock_users";

const AuthService = {

  async login({ email, password }) {

    const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const token =
      "header." +
      btoa(
        JSON.stringify({
          role: user.role,
          exp: Math.floor(Date.now() / 1000) + 3600
        })
      ) +
      ".signature";

    localStorage.setItem("token", token);

    return { role: user.role };

  },

  async register({ name, email, password, role }) {

    const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      throw new Error("User already exists");
    }

    users.push({
      name,
      email,
      password,
      role
    });

    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    return { message: "Registration successful" };

  },

  logout() {
    localStorage.removeItem("token");
  },

  getRole() {

    try {

      const token = localStorage.getItem("token");

      if (!token) return null;

      const payload = JSON.parse(atob(token.split(".")[1]));

      return payload.role;

    } catch {

      return null;

    }

  },

  isAuthenticated() {

    const token = localStorage.getItem("token");

    if (!token) return false;

    try {

      const payload = JSON.parse(atob(token.split(".")[1]));

      return payload.exp * 1000 > Date.now();

    } catch {

      return false;

    }

  }

};

export default AuthService;