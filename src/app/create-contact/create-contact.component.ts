import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  contact: Contact = new Contact();
  constructor(private contactService: ContactService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  saveContact(){
    this.contactService.createContact(this.contact).subscribe(data =>{
      console.log(data);
      
    },
    error => console.log(error));
  }

  goToContactList(){
    this.router.navigate(['/contact']);
  }

  onSubmit(){

    this.saveContact();
    this.goToContactList();
  }
}
