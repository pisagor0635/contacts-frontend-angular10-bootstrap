import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';

const routes: Routes = [
  {path: 'contact', component:ContactListComponent},
  {path: 'create-contact', component:CreateContactComponent},
  {path: 'update-contact/:id', component:UpdateContactComponent},
  {path: 'contact-details/:id', component:ContactDetailsComponent},
  {path: '', redirectTo: 'contact', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
