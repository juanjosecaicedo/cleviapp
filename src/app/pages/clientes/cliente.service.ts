import { SortDirection } from './clientes.component';
import { Injectable, PipeTransform } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

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
interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  srotColumn: string;
  sortDirection: SortDirection;
}

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
  
}
