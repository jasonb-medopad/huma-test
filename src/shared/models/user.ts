export class User {
  firstName = '';
  lastName = '';
  email = '';
  picture: string = null;
  tel = '';
  address = '';
  town = '';
  postCode = '';
  nhsNumber = '';
  country = '';
  title = '';
  gender?: 'M' | 'F';
  birthDate = '';
  allergies = [];
  drugs = [];

  get fullName() {
    return `${this.title}. ${this.firstName} ${this.lastName}`;
  }

  constructor(data?: User) {

    Object.assign(this, data);
  }
}
