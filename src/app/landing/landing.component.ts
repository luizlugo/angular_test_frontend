import { Component, OnInit } from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private metaService: Meta) {
    this.metaService.addTag({name: 'title', content: 'Luis Lugo Angular 4'});
  }

  ngOnInit() {
  }

}
