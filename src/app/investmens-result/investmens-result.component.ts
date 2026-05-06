import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { AnnualInvestmentResult } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investmens-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investmens-result.component.html',
  styleUrl: './investmens-result.component.css'
})
export class InvestmensResultComponent {

  private InvestmentService = inject(InvestmentService);

results = computed(() => this.InvestmentService.investmentResults());

}
