import { User } from "../types/users.js"

// Simulating a DataBase
export class UserRepo {
  users = [
    {
      id: 1,
      name: "Jia",
      email: "jia@mail.com",
      password: "12345",
      role: "user", 
    },
    {
      id: 2,
      name: "John",
      email: "john@mail.com",
      password: "123",
      role: "user", 
    }, 
    {
      id: 3,
      name: "Jon",
      email: "jon@mail.com",
      password: "1212",
      role: "user", 
    }, 
  ]

  findOne(userId: number) {
    const user = this.users.find((user) => user.id === userId)
    return user
  }

  findAll() {
    return this.users
  }

  findIndex(userId: number) {
    const userIndex = this.users.findIndex(
      (user) => user.id === userId
    );
    return userIndex;
  }

  createOne(newUser: User) {
    this.users = [...this.users, newUser]
    return newUser
  }

  updateUser(userIndex: number, updateUserData: User) {
    this.users[userIndex] = {...this.users[userIndex], ...updateUserData,};
    return this.users[userIndex];
  }

  deleteUser(userIndex: number) {
    const user= this.users.splice(userIndex, 1);
    return user;
  }

}
