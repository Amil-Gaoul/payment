import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppInterceptor } from './app.interceptor';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './pages/form/form.component';
import { SuccessComponent } from './pages/success/success.component';

@NgModule({
    declarations: [
        AppComponent,
        FormComponent,
        SuccessComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        SharedModule,
        AppRoutingModule
    ],
    providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AppInterceptor,
          multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
