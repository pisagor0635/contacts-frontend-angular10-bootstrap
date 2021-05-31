import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  contact: Contact = new Contact();
  id: number;

  constructor(private contactService: ContactService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.contactService.getContactById(this.id).subscribe(data => {
      this.contact = data;
    }, error => console.log(error));
  }

  goToContactList() {
    this.router.navigate(['/contact']);
  }

  onSubmit() {
    this.contactService.updateContact(this.id, this.contact).subscribe(data => {
      this.goToContactList();
    }, error => console.log(error))
  }
}
