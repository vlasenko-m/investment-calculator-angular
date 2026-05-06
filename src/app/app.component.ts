import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { AnnualInvestmentResult, InvestmentData } from './investment-input.model';
import { InvestmensResultComponent } from './investmens-result/investmens-result.component';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestmensResultComponent],
  standalone: true,
  templateUrl: './app.component.html',
})

export class AppComponent {

  

  // investmentResults = signal<AnnualInvestmentResult[]>([]);

//   calculateInvestmentResults(data: InvestmentData) {
//     const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
//   const annualData = [];
//   let investmentValue = initialInvestment;

//   for (let i = 0; i < duration; i++) {
//     const year = i + 1;
//     const interestEarnedInYear = investmentValue * (expectedReturn / 100);
//     investmentValue += interestEarnedInYear + annualInvestment;
//     const totalInterest =
//       investmentValue - annualInvestment * year - initialInvestment;
//     annualData.push({
//       year: year,
//       interest: interestEarnedInYear,
//       valueEndOfYear: investmentValue,
//       annualInvestment: annualInvestment,
//       totalInterest: totalInterest,
//       totalAmountInvested: initialInvestment + annualInvestment * year,
//     });
//   }

//   return this.investmentResults.set(annualData);
// }
}
