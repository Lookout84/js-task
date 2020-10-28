const getUserWithEmail = (array, mail) => array.find(({email}) => email === mail);

console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));