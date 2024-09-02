import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: any[] = [];

  constructor(private customerService: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
    });
  }

  viewCustomer(id: number): void {
    this.router.navigate(['/customers', id]);
  }

  deleteCustomer(id: number): void {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.customers = this.customers.filter(customer => customer.id !== id);
    });
  }
}
