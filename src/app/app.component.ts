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
  response: Object = {};
  constructor(private myService: UrlServiceService){}

  ngOnInit(): void {

  }

  handleSubmit(formRecord: any){
    let result = {
      "ok": true,
        "result": {
        "code": "AYS8Sm",
        "short_link": "shrtco.de\/AYS8Sm",
        "full_short_link": "https:\/\/shrtco.de\/AYS8Sm",
        "short_link2": "9qr.de\/AYS8Sm",
        "full_short_link2": "https:\/\/9qr.de\/AYS8Sm",
        "short_link3": "shiny.link\/AYS8Sm",
        "full_short_link3": "https:\/\/shiny.link\/AYS8Sm",
        "share_link": "shrtco.de\/share\/AYS8Sm",
        "full_share_link": "https:\/\/shrtco.de\/share\/AYS8Sm",
        "original_link": "http:\/\/example.org\/very\/long\/link.html"
    }}

    this.response = result
    this.shortLink1 = result.result.short_link
    this.shortLink2 = result.result.short_link2
    this.fullLink = result.result.full_short_link
    this.fullLink2 = result.result.full_short_link2
    return;
     this.myService.shortenUrl(formRecord.value).subscribe((result:any) =>{
      if (result.ok === "true"){
        console.log(result)
        this.response = result
        this.shortLink1 = result.short_link
        this.shortLink2 = result.short_link2
      }else {
        alert("Error trying to send a request");
       }
  })
  }

}
