import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reports-table',
  templateUrl: './reports-table.component.html',
  styleUrls: ['./reports-table.component.css']
})

//TODO: set interface for report


export class ReportsTableComponent implements OnInit {

  reports:any[];

  reportDummyText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  constructor() {

    this.reports = [{reporterName:"יחיאל סלייטרסקי", profileImageUrl:"../../../assets/images/kelly.jpg", report:"גלים טובים אחושרמוטה", photo:"../../assets/images/report1.jpg"},
    {reporterName:"אנדריי איירונס", profileImageUrl:"../../../assets/images/andy.jpg", report:"  משהו מלחיץ טקסט ארוך לבדיקה יבאביי גלים טובים אך לא משהו", photo:"../../../assets/images/report2.jpg"},
    {reporterName:"אביהו מדינה", profileImageUrl:"../../../assets/images/medina.jpg", report:this.reportDummyText, photo:"../../../assets/images/report3.jpg"},
    {reporterName:"יהונתן פרחי", profileImageUrl:"../../../assets/images/john-john-florence_fe.jpg", report:this.reportDummyText, photo:"../../../assets/images/report4.jpg"}];


   }

  ngOnInit() {

  }

}
