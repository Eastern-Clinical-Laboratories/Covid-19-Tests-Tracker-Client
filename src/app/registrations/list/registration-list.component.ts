import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css'],
})
export class RegistrationListComponent implements OnInit {

  constructor(private readonly _router: Router) {
  }

  ngOnInit(): void {
  }

  public async onViewDetailsButtonClicked(): Promise<void> {
    await this._router.navigate(['/registrations/details']);
  }
}
