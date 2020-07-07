import users from './users.js'; // eslint-disable-line

const getUsersWithGender = (users, gender) => {
  const usersGender = users.filter(function(user) {
    return user.gender === gender;
  });
  return usersGender.map(user => user.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
