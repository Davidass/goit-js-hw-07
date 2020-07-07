import users from './users.js'; // eslint-disable-line

const calculateTotalBalance = users => {
  const userBalance = users.reduce(function(totalBalance, user) {
    return totalBalance + user.balance;
  }, 0);
  return userBalance;
};

console.log(calculateTotalBalance(users)); // 20916
