import users from './users.js'; // eslint-disable-line

const getUsersWithEyeColor = (users, color) => {
  const userColor = users.filter(function(user) {
    return user.eyeColor === color;
  });
  return userColor.map(user => user.name);
  // const userColor = users.filter(user => user.eyeColor === color);
  // return userColor;
};

console.log(getUsersWithEyeColor(users, 'blue'));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
