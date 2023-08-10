import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {
  @ViewChild('qrCodeCanvas', { static: true }) qrCodeCanvas!: ElementRef;

  dataString: string = '';

  ngOnInit() {
    this.generateQRCode();
  }

  generateQRCode() {
    QRCode.toCanvas(this.qrCodeCanvas.nativeElement, this.dataString, (error: any) => {
      if (error) {
        console.error('Error generating QR code:', error);
      } else {
        console.log('QR code generated successfully!');
      }
    });
  }
}
