import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.scss']
})
export class SearchMenuComponent implements OnInit {

  public searchWord: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search(){
    console.log(this.searchWord);
    this.router.navigateByUrl("category/" + this.searchWord);
  }

}
