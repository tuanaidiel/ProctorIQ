import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StartExamComponent } from '../start-exam/start-exam.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Course } from '../../../models/course';

@Component({
  selector: 'app-exam',
  imports: [StartExamComponent, FormsModule, CommonModule],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css',
})
export class ExamComponent {
  examId: number | null = null;
  selectedCourse: Course | null = null;
  
  constructor(private router: Router, private route: ActivatedRoute) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as { examId: number } | undefined;
    this.examId = state?.examId ?? null;
  }

  ngOnInit(): void {
    if (!this.examId) {
      // Fallback to query parameters
      this.route.queryParams.subscribe((params) => {
        this.examId = +params['examId'] || null;

        if (!this.examId) {
          console.error('Exam ID not found in state or query parameters');
          this.router.navigate(['/user-exams']); // Optional redirect
        }
      });
    }
  }
}
