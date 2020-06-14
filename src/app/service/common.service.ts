import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  // generateOtp(username: string){
  //   if(username.match(EMAIL_PATTERN)){
      
  //   }
  // }

  imageUpload(img: string){
    let formData = new FormData();
    formData.append("image", img);
  }

  imageRetrieve(){

  }
}
