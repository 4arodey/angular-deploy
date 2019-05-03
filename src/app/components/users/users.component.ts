import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  private products  = [];
  private families = [];
  private locations = [];
  private transactions = [];

  private productsObservable: Observable<any[]> ;

  constructor(private dataService: DataService) {

    this.productsObservable = this.dataService.get_users();

    this.dataService.get_users().subscribe((res: any[]) => {
      this.families = res;
    });
    // this.dataService.get_locations().subscribe((res : any[])=>{
    //   console.log(res);
    //   this.locations = res;
    // });
    // this.dataService.get_transactions().subscribe((res : any[])=>{
    //   console.log(res);
    //   this.transactions = res;
    // });
  }
}
