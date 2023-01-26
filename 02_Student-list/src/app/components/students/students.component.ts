import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  studentList: Student[] = [
    {
      name: 'Rommel',
      lastName: 'Aranguren',
      birthday: new Date(1997, 11, 2),
      isActive: true
    },
    {
      name: 'Camila',
      lastName: 'Orlic',
      birthday: new Date(1999, 11, 28),
      isActive: true
    },{
      name: 'John',
      lastName: 'Doe',
      birthday: new Date(1985, 0, 5),
      isActive: false
    },{
      name: 'Edith',
      lastName: 'Piaf',
      birthday: new Date(1915, 11, 19),
      isActive: false
    },{
      name: 'Marcus',
      lastName: 'Aurelius',
      birthday: new Date(121, 3, 26),
      isActive: false
    },{
      name: 'Chris',
      lastName: 'Martin',
      birthday: new Date(1977, 3, 2),
      isActive: true
    },
  ]
}
