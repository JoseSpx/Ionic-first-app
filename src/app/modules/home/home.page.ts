import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../shared/services/news.service';
import { Article } from '../../shared/models/Article';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  public articlesList : Article[];

  constructor(
    private newsService : NewsService
  ){}

  ngOnInit(){
    this.newsService.getData("everything?q=bitcoin&from=2018-08-24&sortBy=publishedAt")
      .subscribe(
        data => {
          console.log(data.articles);
          this.articlesList = data.articles;
        }
      )
  }


}
