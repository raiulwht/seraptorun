import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'featured-image',
  templateUrl: './featured-image.component.html',
  styleUrls: ['./featured-image.component.scss']
})
export class FeaturedImageComponent implements OnInit {

  @Input() img: string;
  constructor() { }

  ngOnInit(): void {
  }

}
