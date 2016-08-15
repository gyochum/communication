import { Injectable } from '@angular/core';

@Injectable()
export class MainService{
    
    title: string = "Title From the Service!";
    
    getTitle():string{
        return "hey...from the service";
    }
    
    setTitle(title: string){
        this.title = title;
    }
    
}