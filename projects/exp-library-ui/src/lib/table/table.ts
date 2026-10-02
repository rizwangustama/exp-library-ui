import { Component, Input } from '@angular/core';

export interface TableColumn {
  field: string;
  header: string;
}

@Component({
  selector: 'exp-table',
  imports: [],
  templateUrl: './table.html',
  styles: ``
})
export class ExpTable {
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
}
