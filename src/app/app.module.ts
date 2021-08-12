import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { NgStyleComponent } from './ng-style/ng-style.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    TwoWayDataBindingComponent,
    NgStyleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
    MatFormFieldModule,
    MatProgressBarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

