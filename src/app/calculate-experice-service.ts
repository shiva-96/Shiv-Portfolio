import { Service } from '@angular/core';

@Service()
export class CalculateExpericeService {
    calculateTotalExp(): string {
        const startDate = new Date(2022, 4, 2); // May 2 (months are zero-based: 0 is January and 4 is May. So it represents May 2, 2022.)
        const endDate = new Date();

        let years = endDate.getFullYear() - startDate.getFullYear();
        let months = endDate.getMonth() - startDate.getMonth();

        if (endDate.getDate() < startDate.getDate()) {
            months--;
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        return `${years}.${months}`;
    }
}
