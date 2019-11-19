import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { IClient } from '../Client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-client-forms',
  templateUrl: './client-forms.component.html',
  styleUrls: ['./client-forms.component.scss']
})
export class ClientFormsComponent implements OnInit {

  clients = new IClient();
  SearchDetailResult = [];

  constructor(private clientService : ClientService) { }

  ngOnInit() {
    this.resetDetails();
  }


  searchDetails() {
    this.clientService.searchDetails(this.clients).subscribe(
      result => {
        this.SearchDetailResult = result
      })
  
  }

   resetDetails(form?:NgForm){
    if(form != null)
        form.reset;
        this.clients={
          ClientId:null,
          FirstName:'',
          LastName : '',
          DOB :null,
          getAddress  :null
            } 

    }
}
