import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './shopping/container/container.component';
import { ShoppingComponent } from './shopping/listInput/listInputcomponent';
import { ListItemComponent } from './shopping/list-item/list-item.component';
import { ListInputComponent } from './shopping/global-store-components/list-input/list-input.component';
import { ListItemComponentStore } from './shopping/global-store-components/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ShoppingComponent,
    ListItemComponent,
    ListInputComponent,
    ListItemComponentStore
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
