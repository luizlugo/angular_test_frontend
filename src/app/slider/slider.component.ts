import { Component, OnInit } from '@angular/core';
import {Image} from '../CustomClass/Image';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent{
  images: Image[];

  constructor() { }
}
