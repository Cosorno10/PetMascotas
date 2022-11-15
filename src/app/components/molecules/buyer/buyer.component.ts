import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Buyer } from 'src/app/interface/buyer';
import { Pet } from 'src/app/interface/pet';
import { Sale } from 'src/app/interface/sale';
import { BuyerService } from 'src/app/services/buyer.service';
import { SaleService } from 'src/app/services/sale.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  @Input() pet: Pet;
  buyer: Buyer = new Buyer();
  buyerNotFound: boolean = true;

  constructor(private buyerSrv: BuyerService, private saleSrv: SaleService) { }

  ngOnInit(): void {
  }


  submit(f: NgForm) {

  }

  validateDni() {
    if (this.buyer.dni) {
      this.buyerNotFound = true;
      this.buyerSrv.getByDni(this.buyer.dni).subscribe(res => {
        if (res)
          this.buyer = res;
        else
          this.buyerNotFound = false;
      });
    }
  }

  async validateSale() {
    let res = await this.buyerSrv.add(this.buyer);
    if (this.buyer.id == 0)
      this.buyerSrv.add(this.buyer).subscribe(res => {
        this.buyer = res;
        this.doSale();
      });
    else {
      this.doSale();
    }
  }

  doSale() {
    let user = JSON.parse(window.localStorage.getItem('user') || '{}');
    let sale: Sale = {
      user_id: user.id,
      buyer_id: this.buyer.id,
      pet_id: this.pet.id
    };

    this.saleSrv.add(sale).subscribe(res => {
      this.buyer = res
    });
  }

  validateFields() {
    return !this.buyer.name
      || !this.buyer.lastname
      || !this.buyer.dni
      || !this.buyer.email
      || !this.buyer.address
      || !this.buyer.location
      || this.buyer.phone == 0;

  }
}
