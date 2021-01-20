import { Component, OnInit } from '@angular/core';
import {SpicaService, BlogClass} from '../services/spica.service'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.scss']
})
export class  FifthComponent implements OnInit {

  blog: Observable<BlogClass[]>
  title: string
  public blogsDetails
  
  constructor(private spica: SpicaService) { }

  ngOnInit(): void {
    this.blog = this.spica.getBlogsDetails()

    //this.blog.subscribe(data => console.log(data))
    //console.log("blog", this.blog)
  }

}
