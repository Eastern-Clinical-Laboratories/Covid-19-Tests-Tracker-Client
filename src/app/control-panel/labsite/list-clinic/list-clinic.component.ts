import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-clinic',
  templateUrl: './list-clinic.component.html',
  styleUrls: ['./list-clinic.component.css'],
})
export class ListClinicComponent implements OnInit {
  public organizations: any[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
