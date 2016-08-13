import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './components/main.component';
import { MainService } from './services/main.service';

@NgModule({
    imports: [BrowserModule],
    //providers: [MainService],
    declarations: [MainComponent],
    bootstrap: [MainComponent]
})

export class AppModule{}