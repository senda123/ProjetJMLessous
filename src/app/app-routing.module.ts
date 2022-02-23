import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationListComponent } from './components/operation-list/operation-list.component';
import { OperationListClientComponent } from './operation-list-client/operation-list-client.component';

const routes: Routes = [
{path:'',redirectTo:'operationsClient',pathMatch:'full'},
{path:'operations',component:OperationListComponent},
{path:'operationsClient',component:OperationListClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
