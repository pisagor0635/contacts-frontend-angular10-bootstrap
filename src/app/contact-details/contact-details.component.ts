import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  id: number;
  contact: Contact = new Contact();
  constructor(private acivatedRoute: ActivatedRoute,
    private contactService: ContactService) { }

  ngOnInit(): void {
    this.id = this.acivatedRoute.snapshot.params['id'];

    this.contactService.getContactById(this.id).subscribe(data => {
      this.contact = data;
    }, error => console.log(error));
  }

}
