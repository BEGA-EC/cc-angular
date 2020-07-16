import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from 'src/app/services/loading/loading.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptor {

  activeRequests: number = 0;

    constructor(
        private _loadingService: LoadingService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.activeRequests === 0) {
            this._loadingService.startLoading();
        }

        this.activeRequests++;

        return next.handle(request).pipe(
            finalize(() => {
                this.activeRequests--;
                if (this.activeRequests === 0) {
                    this._loadingService.stopLoading();
                }
            })
        )
    };
}