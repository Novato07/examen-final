import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: any[] = [];
courses: any;

  getCareers(): string[] {
    return [...new Set(this.students.map(student => student.career))];
  }
  
  getStudentsByCareer(career: string): any[] {
    return this.students.filter(student => student.career === career);
  }  

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }
}
