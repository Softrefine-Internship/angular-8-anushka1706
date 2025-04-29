import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  totalItems = [5, 10, 15, 20]
  currentPage = 1
  itemsPerPage = 5
  employeeData: any[] = []
  totalPages: number[] = []

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getData((res: any[]) => {
      this.employeeData = res;
      this.calculateTotalPages();
    });
  }

  calculateTotalPages() {
    const total = Math.ceil(this.employeeData.length / this.itemsPerPage);
    this.totalPages = Array.from({ length: total }, (_, i) => i + 1);
    if (this.currentPage > total) this.currentPage = 1;
  }
}
