import { DecimalPipe } from '@angular/common';
import { SortDirection } from './clientes.component';
import { Injectable, PipeTransform } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';


interface ICliente {
  documento: string;
  nombre: string;
  apellidos: string;
  tipoCliente: string;
  correo: string;
}

interface SearchResult {
  clientes: ICliente[];
  total: number;
}
interface IState {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: string;
  sortDirection: SortDirection;
}

// export const CLIENTES:  ICliente  {

// }

function campare(v1, v2) {
  return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}

function sort(clientes: ICliente[], column: string, direction: string): ICliente[] {
  if (direction === '') {
    return clientes;
  } else {
    return [...clientes].sort((a, b) => {
      const res = campare(a[column], b[column]);
      return direction === 'desc' ? res : -res;

    });
  }
}

function matches(cliente: ICliente, term: string, pipe: PipeTransform) {
  return cliente.documento.toLowerCase().includes(term)
    || cliente.nombre.toLowerCase().includes(term)
    || cliente.apellidos.toLowerCase().includes(term)
    || cliente.correo.toLowerCase().includes(term)
    || cliente.tipoCliente.toLowerCase().includes(term);
}
@Injectable({
  providedIn: 'root'
})

export class CLientesServices {
  private _loading$ = new BehaviorSubject<Boolean>(true);
  private _search$ = new Subject<void>();
  private _clientes$ = new BehaviorSubject<ICliente[]>([]);
  private _total$ = new BehaviorSubject<number>(0);
  CLIENTES =  [];

  private _state: IState = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private pipe: DecimalPipe) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe((result) => {
      this._clientes$.next(result.clientes);
      this._total$.next(result.total);
    });
    this._search$.next();
  }
  get clieente$() { return this._clientes$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }

  set page(page: number) {
    this._set({ page });
  }
  set pageSize(pageSize: number) {
    this._set({ pageSize });
  }
  set searchTerm(searchTerm: string) {
    this._set({ searchTerm });
  }

  set sortColumn(sortColumn: string) {
    this._set({ sortColumn });
  }

  set sortDirection(sortDirection: SortDirection) {
    this._set({ sortDirection });
  }

  private _set(patch: Partial<IState>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }
  private _search() {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

    // Ordernar los clientes
    let clientes = sort(this.CLIENTES, sortColumn, sortDirection);

    // Flitrar
    clientes = clientes.filter(cliente => matches(cliente, searchTerm, this.pipe));
    const total = clientes.length;

    // Paginar
    clientes.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);

    return of({ clientes, total });

  }
}
