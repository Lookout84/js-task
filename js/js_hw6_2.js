const getUsersWithEyeColor = (array, color) => array.filter(({eyeColor}) => eyeColor.includes(color));
console.log(getUsersWithEyeColor(users, 'blue'));