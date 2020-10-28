const getInactiveUsers = array  => array.filter(({isActive}) => !isActive);

console.log(getInactiveUsers(users));