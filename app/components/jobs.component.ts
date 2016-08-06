import { Component } from '@angular/core';

@Component({
    selector: 'content',
    template: "<div>{{message}}</div>"
})

export class JobsComponent{
    
    message: string = "hey, i am content";
    click(){
        alert('jobs clicked!');
    }
    
}