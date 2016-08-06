import { Component } from '@angular/core';
import { SearchComponent } from './search.component';
import { JobsComponent } from './jobs.component';

@Component({
    selector: "main",
    directives: [SearchComponent, JobsComponent],
    template: "<search (click)='click()'></search> <br /> <h1>main Component - {{title}}</h1><br /><content></content>"
})

export class MainComponent{
    
    title: string = "In the Middle";   
    
}