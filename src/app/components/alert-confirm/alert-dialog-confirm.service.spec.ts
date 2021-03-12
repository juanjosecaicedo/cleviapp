import { TestBed } from '@angular/core/testing';

import { AlertDialogConfirmService } from './alert-dialog-confirm.service';

describe('AlertDialogConfirmService', () => {
  let service: AlertDialogConfirmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertDialogConfirmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
