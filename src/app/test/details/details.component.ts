import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { TimelineElement } from '../../pages/full-pages/timeline/horizontal/component/timeline-element';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  public isRapidTest: boolean;

  public timeline: TimelineElement[] = [
    { date: new Date(2014, 1, 16), selected: true, title: 'Horizontal Timeline', content: 'Test Content' },
    { date: new Date(2014, 2, 28), title: 'Event title here', content: 'Test Content' },
    { date: new Date(2014, 3, 20), title: 'Event title here', content: 'Test Content' },
    { date: new Date(2014, 5, 20), title: 'Event title here', content: 'Test Content' },
    { date: new Date(2014, 7, 9), title: 'Event title here', content: 'Test Content' },
    { date: new Date(2014, 8, 30), title: 'Event title here', content: 'Test Content' },
    { date: new Date(2014, 9, 15), title: 'Event title here', content: 'Test Content' },
    { date: new Date(2014, 11, 1), title: 'Event title here', content: 'Test Content' },
    { date: new Date(2014, 12, 10), title: 'Event title here', content: 'Test Content' },
    { date: new Date(2015, 1, 19), title: 'Event title here', content: 'Test Content' },
    { date: new Date(2015, 3, 3), title: 'Event title here', content: 'Test Content' },
  ];

  constructor(private readonly _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => this.isRapidTest = params['isRapidTest'] === 'true');
  }
}
