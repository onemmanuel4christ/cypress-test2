import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlServiceService {

  constructor(private http: HttpClient) { }

  shortenUrl(longUrl: any) {
    return this.http.get(environment.apiEndpoint + '/shorten/?url='+ longUrl);
  }
}
