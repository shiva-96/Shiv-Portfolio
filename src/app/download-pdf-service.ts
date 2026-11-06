import { Service } from '@angular/core';

@Service()
export class DownloadPdfService {
    downloadResume(): void {
        const pdfUrl = 'assets/files/Shiv Prasad_Resume.pdf';

        const link = document.createElement('a');
        link.href = pdfUrl;
        const currDate:string = new Date().toLocaleDateString('en-GB').replaceAll('/', '-');
        link.download = `Shiv Prasad_${currDate}.pdf`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
