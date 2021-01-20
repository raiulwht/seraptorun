import { Component, OnInit } from '@angular/core';
import {SpicaService, BlogClass} from '../services/spica.service'
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class  SecondComponent implements OnInit {

  blog: Observable<BlogClass[]>
  title: string
  titles: string
  article: string
  author: string
  date: Date
  img: string
  id: string
  public blogDetails

  constructor(private spica: SpicaService, private route: ActivatedRoute) { }


ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    this.id = params.id
  })

  this.spica.getBlogDetails(this.id).subscribe(
    data => {
      this.blogDetails = data
      this.title = this.blogDetails.title;
      this.article = this.blogDetails.article;
      this.author = this.blogDetails.author;
      this.date = this.blogDetails.created_at;
      this.img = this.blogDetails.thumbnail;
    })

    console.log("img", this.img)
  }




}



