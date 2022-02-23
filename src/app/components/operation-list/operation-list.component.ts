import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/models/compte.model';
import { Operation } from 'src/app/models/operation.model';
import { CompteService } from 'src/app/services/compte.service';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})
export class OperationListComponent implements OnInit 
{
  Operations?:Operation[];
  CurrentOperation:Operation={};
  CurrentIndex=-1;
  Type=``;
  codeCompt="";
  codeCompt2=0;
  typeCompt="";
  montant=0;
  Compte?:Compte;
  constructor(private operationservice:OperationService,private compteservice:CompteService) 
  { }

  ngOnInit(): void {
    this.RetrieveOperations();
  }
  setCodeCompt():void {
this.RetrieveOperations();

  }


  RetrieveOperations():void
  {this.operationservice.getAllOperations().subscribe(data=>{
    this.Operations=data;
    console.log(this.Operations);
  },
  error=>{
    console.log(error);
  }
  
  )};
 
  setActiveOperation(op:Operation,index:number):void
  {this.CurrentOperation=op;
  this.CurrentIndex=index;
  };

  refreshList(): void {
    this.RetrieveOperations();
    this.CurrentOperation = {};
    this.CurrentIndex=-1;

  }

  searchType(): void {
    this.CurrentOperation = {};
    this.CurrentIndex = -1;
    this.operationservice.filter({code:-1,type:this.Type})
      .subscribe(
        data => {
          this.Operations = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
}
