import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    private lang: string = 'en';

    constructor(private router: Router) { }

    setLanguage(lang: string){
        this.lang = lang;
        //this.router.navigateByUrl('/home');
        this.reloadCurrentRoute();
    }

    getLanguage(){
        return this.lang;
    }

    reloadCurrentRoute() {
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/id', {skipLocationChange: true}).then(() => {
            this.router.navigate([currentUrl]);
        });
    }
}