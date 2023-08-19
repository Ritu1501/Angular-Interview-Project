import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.scss']
})
export class AtmComponent implements OnInit {
  withdrawAmount: any;
  atmForm: any = FormGroup;
  atmData: any = [];
  validDenominations: number[] = [100, 200, 500, 2000];
  depositAmount: any = [];
  balanceAmount: any;
  message: string = '';
  invalidInput: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.createAtmForm();
  }

  createAtmForm() {
    this.atmForm = new FormGroup({
      withDraw: new FormControl(''),
      deposit: new FormControl('')
    })
  }

  deposit() {
    let body:any = {
      withDraw: this.atmForm.value.withDraw
    }

    console.log(body);
    if (this.validDenominations.includes(body.withDraw)) {
      this.atmData.push(body);
      console.log(this.atmData);
      console.log(`Withdrawing: ₹${this.atmData}`);
      this.message = `Deposit: ₹${this.atmData[0].withDraw}`;
    } else {
      this.message = 'Insufficient balance for Deposit.';
    }

  }


  withdraw() {
    console.log('enter in withDraw function');
    let data = {
      deposit: this.atmForm.value.deposit
    }

    if(this.atmData[0].withDraw >= data.deposit) {
      this.depositAmount.push(data);
      console.log('atm Data', this.depositAmount);
      this.balanceAmount =  this.atmData[0].withDraw - this.depositAmount[0].deposit;
      console.log('balance amount', this.balanceAmount);
      this.message = `Withdraw: ₹${this.depositAmount[0].deposit}`
    } else {
      this.message = 'Insufficient balance for withdrawal.';

    }
  }

 
}
