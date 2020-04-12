import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',
  styleUrls: ['./waiting-list.component.scss'],
})
export class WaitingListComponent implements OnInit {
  constructor(private readonly _router: Router) {
  }

  ngOnInit(): void {
  }

  public async onUpdateSampleButtonClicked(): Promise<void> {
    await this._router.navigate(['sample-collection/update-sample']);
  }
}
