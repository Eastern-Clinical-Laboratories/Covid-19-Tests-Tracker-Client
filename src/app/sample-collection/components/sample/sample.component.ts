import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { AddSampleRequestModel } from '../../models/add-sample-request.model';
import { SampleCollectionService } from '../../services/sample-collection.service';

@UntilDestroy()
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent implements OnInit {
  public isRapidTest: boolean;

  public addSampleRequestModel: AddSampleRequestModel;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _sampleCollectionService: SampleCollectionService,
    private readonly _toasterService: ToastrService,
  ) {
    this._initializeProperties();
  }

  public ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => (this.isRapidTest = params['isRapidTest'] === 'true'));
  }

  public onSaveButtonClicked(): void {
    this._sampleCollectionService
      .updateSample(this.addSampleRequestModel)
      .pipe(untilDestroyed(this))
      .subscribe(
        () => {
          this._initializeProperties();
          this._toasterService.success('Assertion Details Updated Successfully', 'Success', { progressBar: true });
        },
        () =>
          this._toasterService.error(
            'An Error Occurred, when processing the request. Please try again later',
            'Error',
            {
              progressBar: true,
            }
          )
      );
  }

  private _initializeProperties() {
    this.addSampleRequestModel = {
      id: '',
      test: '',
      comment: '',
      priority: '',
      sampleType: '',
      assertionDateTime: new Date(),
      collectionDateTime: new Date(),
    };
  }
}
