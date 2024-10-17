class User {
  id: number;
  username: string;
  name: string;
  lastname: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: number,
    username: string,
    name: string,
    lastname: string,
    email: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
