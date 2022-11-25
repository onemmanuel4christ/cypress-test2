import { Component, OnInit } from '@angular/core';
import { UrlServiceService } from './service/url-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  shortLink1: string = "";
  shortLink2: string = "";
  fullLink: string = "";
  fullLink2: string = "";
  data: any;
  errorMessage: any = null;
  fetching: boolean = false;
  constructor(private myService: UrlServiceService){}

  ngOnInit(): void {

  }

  handleSubmit(formRecord: any){
    this.fetching = true;
     return this.myService.shortenUrl(formRecord.value.url).subscribe((result:any) =>{
        this.data = result.result;
        console.log(result)
        this.shortLink1 = this.data.short_link
        this.shortLink2 = this.data.short_link2
        this.fullLink = this.data.full_short_link
        this.fullLink2 = this.data.full_short_link2
        this.fetching = false;

      }, (err) =>{
        this.fetching = false
        // this.errorMessage = err.error.error
        alert(err.error.error)
      })
  }

}
