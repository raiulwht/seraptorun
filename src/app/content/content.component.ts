import { Component, OnInit } from '@angular/core';
import {SpicaService, BlogClass} from '../services/spica.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class  ContentComponent implements OnInit {

  blog: Observable<BlogClass[]>
  title: string

  constructor(private spica: SpicaService) { }

  ngOnInit(): void {
    this.blog = this.spica.getAllBlog()

    //this.blog.subscribe(data => console.log(data))
    //console.log("blog", this.blog)
  }

}
