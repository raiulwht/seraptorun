import { Component, OnInit } from '@angular/core';
import {SpicaService, Blog} from '../services/spica.service'
import { Observable } from 'rxjs';
import { tap} from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class  PostsComponent implements OnInit {

  blogs: Observable<Blog[]>
  title: string

  constructor(private spica: SpicaService) { }

  ngOnInit(): void {
    this.blogs = this.spica.getAllBlog().pipe(
      tap(console.log)
    )
  }

}
