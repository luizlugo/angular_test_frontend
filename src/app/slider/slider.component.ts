import { Component, OnInit } from '@angular/core';
import {Image} from '../customclass/image';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent{
  images: Image[];

  constructor() { }
}
