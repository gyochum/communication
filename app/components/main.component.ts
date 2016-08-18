import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
    selector: "main", 
    templateUrl: "app/views/home/index.html"
})

export class MainComponent implements OnInit, OnDestroy{
    
    title: string = "All Alone";       
    private subscription: any; 
    
    constructor(public service: MainService){}   
    
    ngOnInit() {
        this.subscription = this.service.searcher.subscribe(s => {
           this.title = s; 
        });
    }
    
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
    
}