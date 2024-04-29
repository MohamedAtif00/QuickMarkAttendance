import { AfterViewInit, Component, ElementRef, OnInit, VERSION, ViewChild } from '@angular/core';
// import { BarcodeScanner } from 'dynamsoft-javascript-barcode';
// import {
//   ScannerQRCodeConfig,
//   ScannerQRCodeResult,
//   NgxScannerQrcodeService,
//   NgxScannerQrcodeComponent,
//     ScannerQRCodeSelectedFiles,
// } from 'ngx-scanner-qrcode';

import { BarcodeFormat, Result } from '@zxing/library';
import { ZXingScannerComponent } from '@zxing/ngx-scanner'
import { Html5QrcodeScanner } from 'html5-qrcode/esm/html5-qrcode-scanner';
import { StudentService } from '../service/student.service';
import { AuthService } from 'src/app/authentication/service/auth.service';

@Component({
  selector: 'app-scanner-page',
  templateUrl: './scanner-page.component.html',
  styleUrls: ['./scanner-page.component.css']
})
export class ScannerPageComponent  implements OnInit{


    id: string = '';
    scanner: Html5QrcodeScanner | null = null;
  
    constructor(private studentService: StudentService,private authServ:AuthService) {}
  
    ngOnInit(): void {
      this.initializeScanner();
    }
  
    initializeScanner(): void {
      try {
        this.scanner = new Html5QrcodeScanner('reader', {
          qrbox: { width: 250, height: 250 }, // Set scanning box dimensions
          fps: 20 // Frames per second
        },undefined);
        this.scanner?.render(this.onScanSuccess.bind(this), this.onScanError.bind(this)); // Bind context for success/error functions
      } catch (error) {
        console.error('Error initializing scanner:', error);
        // Handle scanner initialization errors gracefully (e.g., show error message)
      }
    }
  
    onScanSuccess(decodedText: string): void {
      this.id = decodedText;
      console.log(decodedText);
      
      document.getElementById('result')?.innerHTML ? `
        <h2>Success!</h2>
        <p><a href="${decodedText}">${decodedText}</a></p>
      `:'';

      this.studentService.AttendStudent(this.id,this.authServ.user.id).subscribe(data=>{
          if(data.errors.length == 0)
            alert('you attended')
      });
    }
  
    onScanError(error: string): void {
      console.error('Error scanning QR code:', error);
      // Handle scanning errors gracefully (e.g., show error message, retry)
    }


  
}
