import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentData } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  constructor (private investmentService: InvestmentService) {}

  annualInvestment = signal(0);
  initialInvestment = signal(0);
  duration = signal(0);
  expectedReturn = signal(0);

  calculateInvestmentResults = output<InvestmentData>();

  onSubmit() {
   this.investmentService.calculateInvestmentResults({
     annualInvestment: this.annualInvestment(),
     initialInvestment: this.initialInvestment(),
     duration: this.duration(),
     expectedReturn: this.expectedReturn()
   });
  }

}
