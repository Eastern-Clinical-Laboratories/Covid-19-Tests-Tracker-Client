import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css'],
})
export class TestListComponent implements OnInit {

  constructor(private readonly _router: Router) {
  }

  ngOnInit(): void {
  }

  public async onUpdateSampleButtonClicked(): Promise<void> {
    await this._router.navigate(['tests/update-test']);
  }
}
