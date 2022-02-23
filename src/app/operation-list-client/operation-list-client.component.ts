import { Component, OnInit } from '@angular/core';
import { Compte } from '../models/compte.model';
import { Operation } from '../models/operation.model';
import { CompteService } from '../services/compte.service';
import { OperationService } from '../services/operation.service';

@Component({
  selector: 'app-operation-list-client',
  templateUrl: './operation-list-client.component.html',
  styleUrls: ['./operation-list-client.component.css']
})
export class OperationListClientComponent implements OnInit {
  Operations?:Operation[];
  CurrentOperation:Operation={};
  CurrentIndex=-1;
  Type=``;
  codeCompt="";
  codeCompt2=0;
  typeCompt="";
  montant=0;
  Compte?:Compte ={};

  constructor(private operationservice:OperationService,private compteservice:CompteService) { }

  ngOnInit(): void {
  }
  setCodeCompt():void {
    this.RetrieveOperationsBycode();
    this.RetrieveCompte();
      }
      RetrieveCompte():void {
    this.compteservice.getCompte({code:this.codeCompt}).subscribe(data=>{
      this.Compte=data;
      console.log(data);
    },
    error=>{
      console.log(error);
    }
    
    );
      }
    
      RetrieveOperations():void
      {this.operationservice.getAllOperations().subscribe(data=>{
        this.Operations=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
      
      )};
      RetrieveOperationsBycode():void
      {this.operationservice.getAllOperationsBycode(this.codeCompt).subscribe(data=>{
        this.Operations=data;
        console.log(data);
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
        this.RetrieveOperationsBycode();
        this.CurrentOperation = {};
        this.CurrentIndex=-1;
        this.RetrieveCompte();
      }
    
      searchType(): void {
        this.CurrentOperation = {};
        this.CurrentIndex = -1;
        this.operationservice.filter({code:this.codeCompt,type:this.Type})
          .subscribe(
            data => {
              this.Operations = data;
              console.log(data);
            },
            error => {
              console.log(error);
            });
      }
      send():void{



        
        if (this.typeCompt==="Retrait")
        {
    this.operationservice.retrait_opt({code:this.codeCompt,montant:this.montant}).subscribe(data=>{
    
      console.log(data);
      this.refreshList();
    },
    error=>{
      console.log(error);
    }
    
    );
        }
        else if (this.typeCompt==="Versement")
        {
    this.operationservice.versement_opt({code:this.codeCompt,montant:this.montant}).subscribe(data=>{
    
      console.log(data);
      this.refreshList();
    },
    error=>{
      console.log(error);
    },
    
    );
        }
        else
        {
          this.operationservice.virement_opt({code:this.codeCompt,montant:this.montant,code2:this.codeCompt2}).subscribe(data=>{
    
            console.log(data);
            this.refreshList();
          },
          error=>{
            console.log(error);
          },
          
          );
        }
       
    
      };
}
