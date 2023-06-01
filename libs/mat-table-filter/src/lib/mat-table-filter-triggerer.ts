import {InjectionToken, Type, inject} from '@angular/core';
import {MatColumnDef} from '@angular/material/table';
import {Observable, Subject} from 'rxjs';
import {MatTableFilterButtonComponent} from './mat-table-filter-button/mat-table-filter-button.component';

export class MatTableTriggerer<T> {
  protected matColumnDef = inject(MatColumnDef);
  protected selectedFilterSubject = new Subject<T>();

  public get columnKey() {
    return this.matColumnDef.name;
  }

  public get selectedFilter$(): Observable<T> {
    return this.selectedFilterSubject.asObservable();
  }
}

export const MAT_TABLE_TRIGGERER_TYPE = new InjectionToken<
  Type<MatTableTriggerer<any>>
>('Component type for MatTableFilter to use in headers', {
  providedIn: 'root',
  factory: () => MatTableFilterButtonComponent,
});
