import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import "rxjs/add/operator/share";

@Injectable()
export class MainService{
    
    title: string = "Title From the Service!";
    searcher: Observable<string>;
    private observer: Observer<string>;
    
    constructor(){
        this.searcher = new Observable<string>(o => 
           this.observer = o 
        ).share();
    }
    
    getTitle():string{
        return "hey...from the service";
    }
    
    setTitle(title: string){
        this.title = title;
    }
    
    search(term: string){
        if(this.observer != undefined)
            this.observer.next(term);
    }
    
}