import { Component, OnInit } from '@angular/core';
import { Blog } from '../services/spica.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  blogList: Blog;
  constructor() { }

  ngOnInit(): void {
  }

}
