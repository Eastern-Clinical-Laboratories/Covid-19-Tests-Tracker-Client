import { Component, OnInit } from '@angular/core';

import { FileUploader } from 'ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css'],
})
export class AddDoctorComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: URL, isHTML5: true });

  constructor() {
  }

  ngOnInit(): void {
  }
}
