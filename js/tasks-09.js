import users from './users.js'; // eslint-disable-line

const getNamesSortedByFriendsCount = users => {
  const sortFriends = [...users].sort(function(prevUsers, nextUsers) {
    return prevUsers.friends.length - nextUsers.friends.length;
  });
  return sortFriends.map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
