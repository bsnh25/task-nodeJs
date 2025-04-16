const userDb = {
  username: "joko",
  password: "rahasia",
  role: "admin",
};

function loginUser(inputUsername, inputPassword, callback) {
  setTimeout(() => {
    if (inputUsername == userDb.username && inputPassword == userDb.password) {
      callback(userDb);
    } else {
      console.log("Invalid User");
    }
  }, 500);
}

function getRole(user, callback) {
  setTimeout(() => {
    if (user.role == userDb.role) {
      callback(user.role);
    } else {
      console.log("Bukan Admin");
    }
  }, 500);
}

function getMenu(role, callback) {
  setTimeout(() => {
    if (role == "admin") {
      callback("Dashboard Admin");
    } else {
      callback("Dashboard");
    }
  }, 500);
}

loginUser("joko", "rahasia", function (user) {
  getRole(user, (role) => {
    getMenu(role, (menu) => {
      console.log("Pergi ke halaman : " + menu);
    });
  });
});
