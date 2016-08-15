import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './components/main.component';
import { SearchComponent } from './components/search.component';
import { MainService } from './services/main.service';

@NgModule({
    imports: [BrowserModule, FormsModule],
    providers: [MainService],
    declarations: [MainComponent, SearchComponent],
    bootstrap: [MainComponent, SearchComponent]
})

export class AppModule{}