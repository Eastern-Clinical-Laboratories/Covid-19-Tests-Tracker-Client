import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-registration',
  templateUrl: './add-registration.component.html',
})
export class AddRegistrationComponent implements OnInit {

  constructor(private readonly _router: Router) {
  }

  ngOnInit(): void {
  }

  public async onSaveButtonClicked(): Promise<void> {
    await this._router.navigate(['/registrations/preview-registrations']);
  }
}
