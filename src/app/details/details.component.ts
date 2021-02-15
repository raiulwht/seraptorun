import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { Blog, SpicaService } from '../services/spica.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  blogDetails: Observable<Blog>
  constructor(private spica: SpicaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.pipe(take(1)).subscribe(params => {
      this.blogDetails = this.spica.getBlogBySlug(this.activatedRoute.snapshot.paramMap.get('postslug')).pipe(
        map(blog => blog[0])
      )
    })
  }
}
