import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../../services/professor.service';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {
  professors: any[] = [];
  courses: string[] = [];
  
  constructor(private professorService: ProfessorService) {}

  ngOnInit(): void {
    this.professorService.getProfessors().subscribe(data => {
      this.professors = data;
    });
    this.professorService.getProfessors().subscribe(data => {
      this.professors = data;
    });
  }

  getCourses(): string[] {
    return this.courses;
  }

  getProfessorsByCourse(course: string): any[] {
    return this.professors.filter(professor => professor.course === course);
  }
}
