import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-add-clinic',
  templateUrl: './add-clinic.component.html',
  styleUrls: ['./add-clinic.component.css'],
})
export class AddClinicComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: URL, isHTML5: true });
  public hasBaseDropZoneOver = false;

  constructor() {
  }

  ngOnInit(): void {
  }
}
