import { Component, OnInit, Input } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
 

 @Input() SearchDetailResult;
  constructor(private clientservice: ClientService) {
    
  }

  ngOnInit() {
    
  }

  

}
