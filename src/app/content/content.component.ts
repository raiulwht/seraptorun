import { Component, OnInit } from '@angular/core';
import {SpicaService, Blog} from '../services/spica.service'
import { Observable } from 'rxjs';
import { tap} from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class  ContentComponent implements OnInit {

  blogs: Observable<Blog[]>
  title: string

  constructor(private spica: SpicaService) { }

  ngOnInit(): void {
    this.blogs = this.spica.getAllBlog().pipe(
      tap(console.log)
    )
  }

}
