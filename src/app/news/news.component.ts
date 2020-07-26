import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  articles: any[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getNews().subscribe((ressponse) => {
      console.log(ressponse);
      // tslint:disable-next-line:no-string-literal
      this.articles = ressponse['articles'];
    });
  }

}
