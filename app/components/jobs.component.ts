import { Component } from '@angular/core';

@Component({
    selector: "main",
    template: "main Component - {{title}}"
})

export class MainComponent{
    
    title: string = "In the Middle";
    
}