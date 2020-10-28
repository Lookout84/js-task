const getUsersWithGender = (array, gender) => array.filter(gen => gen.gender === gender).map(({name}) => name);

console.log(getUsersWithGender(users, 'male'));
