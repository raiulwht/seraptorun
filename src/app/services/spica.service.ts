import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpicaService {
  url: string = 'https://test-4061d.hq.spicaengine.com/api/';

  constructor(private httpClient: HttpClient) { }



  public getAllBlog(): Observable<BlogClass[]> {
    return this.httpClient.get<BlogClass[]>(
      `${this.url}bucket/5fd9d9b8271b3c002c56001e/data?limit=20&sort={"created_at":-1}`
    );
  }



  public getBlogDetails(id:string): Observable<BlogClass[]> {
    return this.httpClient.get<BlogClass[]>(
      `${this.url}bucket/5fd9d9b8271b3c002c56001e/data/${id}`
    );
  }

 public getBlogsDetails(): Observable<BlogClass[]> {
    return this.httpClient.get<BlogClass[]>(
      `${this.url}bucket/5fd9d9b8271b3c002c56001e/data?limit=1&sort={"created_at":-1}`
    );
  }
}
export class BlogClass {
  constructor(
    public _id: string,
    public created_at: Date,
    public titles: string,
    public title: string,
    public article: string,
    public author: boolean,
    public thumbnail: string
  ) {}
}



