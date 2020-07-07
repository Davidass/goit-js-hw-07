import users from './users.js'; // eslint-disable-line

const getSortedUniqueSkills = users => {
  const usersSkills = users.reduce(function(allSkills, user) {
    allSkills.push(...user.skills);
    return allSkills;
  }, []);
  return usersSkills
    .filter(function(theUser, index, array) {
      return array.indexOf(theUser) === index;
    })
    .sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
