import users from './users.js'; // eslint-disable-line

const getInactiveUsers = users => {
  const inactiveUser = users.filter(function(user) {
    return !user.isActive;
  });
  return inactiveUser.map(user => user.name);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
