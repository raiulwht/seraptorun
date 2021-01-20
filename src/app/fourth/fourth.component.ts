import { Component, OnInit } from '@angular/core';
import {SpicaService, BlogClass} from '../services/spica.service'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.scss']
})
export class  FourthComponent implements OnInit {

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
