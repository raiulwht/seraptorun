import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CustomHttpInterceptor } from './services/custom.http.intercepor';
import { FilterPipe } from './filter.pipe';
import { DetailsComponent } from './details/details.component';
import { CommonModule } from '@angular/common';
import { FeaturedImageComponent } from './components/featured-image/featured-image.component';
import { SearchMenuComponent } from './components/search-menu/search-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { MinimalPostComponent } from './components/minimal-post/minimal-post.component';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    FilterPipe,
    DetailsComponent,
    FeaturedImageComponent,
    SearchMenuComponent,
    CategoryComponent,
    MinimalPostComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
