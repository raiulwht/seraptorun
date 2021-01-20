import { Component, OnInit } from '@angular/core';
import {SpicaService, BlogClass} from '../services/spica.service'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.scss']
})
export class  SixthComponent implements OnInit {

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
