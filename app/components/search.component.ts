import { Component } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
    selector: "search",
    template: "<input type='text' placeholder='search...' [(ngModel)]='heading' /> <button (click)='click()'>click me</button>"
})

export class SearchComponent{
    
    constructor(private service: MainService){
        
    }
    
    //@Input
    heading: string;
    
    click(){                
        this.service.setTitle(this.heading);
    }
        
}