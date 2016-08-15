import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
    selector: "main", 
    templateUrl: "app/views/home/index.html"
})

export class MainComponent implements OnInit{
    
    title: string = "All Alone";        
    
    constructor(public service: MainService){
        
    }   
    
    ngOnInit() {
        this.title = this.service.getTitle();
    }
    
}