import { ToastrService } from '@openng/ngx-toastr';
import { inject } from '@angular/core';

export class Loading {

  private toastr = inject(ToastrService);

  showSuccess() {
    this.toastr.success('Product added successfully!', 'Success');
  }

  showError() {
    this.toastr.error('Something went wrong!', 'Error');
  }
  showInfo(){
    this.toastr.info('')
  }
}
