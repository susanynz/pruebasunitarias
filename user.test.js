const users = require('./users.js');
const { getUserById, getUserByUsername, validatePassword } = require('./userFunctions.js');

describe('User functions tests', () => {
  it('Should get the user by its id', () => {
    const user = getUserById(1);
    expect(user).toEqual({
      id: 1,
      username: 'hpLover4',
      email: 'sirious90@gmail.com',
      password: 'hArrydotCo9m'
    });
  });
});
