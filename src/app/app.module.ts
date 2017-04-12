import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminUserComponent} from './admin-user/admin-user.component';
import { AdminService } from './shared/admin.service'

@NgModule({
  declarations: [
    AppComponent,
    AdminAddComponent,
    AdminListComponent,
    AdminUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
