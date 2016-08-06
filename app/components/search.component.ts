import { Component } from '@angular/core';

@Component({
    selector: "search",
    template: "<input type='text' placeholder='search...' /> <button (click)='click()'>click me</button>"
})

export class SearchComponent{
    
    heading: string;
        
}