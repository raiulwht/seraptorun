import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpicaService {
  url: string = 'https://test-4061d.hq.spicaengine.com/api/';

  constructor(private httpClient: HttpClient) { }



  public getAllBlog(): Observable<Blog[]> {
    return this.httpClient.get<Blog[]>(
      `${this.url}bucket/5fd9d9b8271b3c002c56001e/data?limit=20&sort={"created_at":-1}`
    );
  }



  public getBlogDetails(id:string): Observable<Blog[]> {
    return this.httpClient.get<Blog[]>(
      `${this.url}bucket/5fd9d9b8271b3c002c56001e/data/${id}`
    );
  }

  public getBlogBySlug(slug:string): Observable<Blog[]> {
    return this.httpClient.get<Blog[]>(
      `${this.url}bucket/5fd9d9b8271b3c002c56001e/data?filter=slug=='${slug}'`
    );
  }

 public getBlogsDetails(): Observable<Blog[]> {
    return this.httpClient.get<Blog[]>(
      `${this.url}bucket/5fd9d9b8271b3c002c56001e/data?limit=1&sort={"created_at":-1}`
    );
  }
}
export interface Blog {
  _id: string,
  created_at: Date,
  titles: string,
  title: string,
  article: string,
  author: boolean,
  thumbnail: string,
  slug: string
}



