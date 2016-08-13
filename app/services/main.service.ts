import { Injectable } from '@angular/core';

@Injectable()
export class MainService{
    
    getTitle():string{
        return "hey...from the service";
    }
    
}