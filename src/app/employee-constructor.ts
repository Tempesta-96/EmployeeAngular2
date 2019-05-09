export class EmployeeConstructor {
  id: number;
  name: string;
  designation: string;
  salary: number;
  age: number;
  
  constructor(id: number, name: string, designation: string, salary: number, age: number) {
    this.id = id;
    this.name = name;
    this.designation = designation;
    this.salary = salary;
    this.age = age;
  }
}