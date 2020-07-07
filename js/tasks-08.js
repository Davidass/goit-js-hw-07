import users from './users.js'; // eslint-disable-line

const getUsersWithFriend = (users, friendName) => {
  const allUsers = users.filter(function(user) {
    return user.friends.includes(friendName);
  });
  return allUsers.map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
