import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'https://meme-api.herokuapp.com/gimme';
  constructor(private httpClient: HttpClient) {}

  getMeme() {
    return this.httpClient.get(this.url);
  }
}
