import { Component, OnInit } from '@angular/core';
import { ClientReport } from '../Models/client-report';
import { ClientReportService } from './client-report-service';
declare var jquery:any;
declare var $ :any;
declare var jsPDF: any;


@Component({
  selector: 'app-client-report',
  templateUrl: './client-report.component.html',
  styleUrls: ['./client-report.component.css']
})
export class ClientReportComponent implements OnInit {

  public reports: ClientReport[] = new Array<ClientReport>();
  startDate: string;
  endDate:string;
  
  ngOnInit() {
  }
  constructor(private clientReportService: ClientReportService) {
    
  }
  

  getReportsByParameters(): void{
    this.clientReportService.seacrhClients(this.startDate,this.endDate).subscribe(
      (data: ClientReport[]) => {
        this.reports = data;
      }
    );
  }

  /* Jquery*/

  generatePDF(){
    var doc = new jsPDF();
    var specialElementHandlers = {
        '#editor': function (element, renderer) {
            return true;
        }
    };
    
    $('#cmd').click(function () {   
        doc.fromHTML($('#content').html(), 15, 15, {
            'width': 200,
                'elementHandlers': specialElementHandlers
        });
        doc.save('report.pdf');
    });
    
  }
}
