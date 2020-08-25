import { Component, OnInit } from '@angular/core';
import { MediaObserver } from "@angular/flex-layout";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'commerce-ng';

  constructor(
    public media: MediaObserver,
  ) { }

  ngOnInit() {
    this.media.asObservable().subscribe();
  }

}
