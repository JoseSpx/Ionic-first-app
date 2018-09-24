import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Article, News } from '../models/Article';

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http : HttpClient
  ) { }

    public getData(url : string) : Observable<News> {
      let news_url = `${API_URL}/${url}&apiKey=${API_KEY}`;
      return this.http.get<News>(news_url);;
    }


}
