import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './components/list/list.component';
import { ApiService } from './api.service';




@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, ListComponent],
  bootstrap: [AppComponent],
  providers: [ApiService]
})
export class AppModule { }