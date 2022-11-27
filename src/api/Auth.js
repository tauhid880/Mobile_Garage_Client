export const setAuthToken = (user, userRole) => {
  const currentUser = {
    email: user.email,
    name: user.displayName,
    role: userRole,
  };

  // Save user in DB and get user
  fetch(`${process.env.REACT_APP_API_URL}/user/${user?.email}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // Save token in Localstorage
      localStorage.setItem("mobileGarage-token", data.token);
    });
};
