import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { testapi, users } from '../models/admin';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private API_URL = 'http://127.0.0.1:8000/api/';

  // private API_URL_de = 'http://127.0.0.1:8000/api/testdb/';

  public code_tokens = `Bearer ${localStorage.getItem('profanis_auth')}`;
  // private headers =
  // private API_URL_login = 'http://127.0.0.1:8000/api/login/';
  constructor(private _httpClient: HttpClient) {
  }


  login(data: any): Observable<any> {
    return this._httpClient.post<any>(this.API_URL + 'customer-login', data);
  }
  register(data: any): Observable<any> {
    return this._httpClient.post<any>(this.API_URL + 'register_customer', data);
  }
  logout(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'logout', {
      headers: {
        Authorization: this.code_tokens,
      },
    });
  }


  //chức năng giỏ hàng
  // danh sách sản phẩm của giỏ hàng
  getallcart(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'cart/', {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  // create_cart(product_id:number, quantity:number): Observable<any> {
  //   console.log('nè nè',this.code_tokens);
  //   return this._httpClient.post<any>(this.API_URL + 'cart-add/', {
  //     headers: {
  //       Authorization: this.code_tokens
  //       // Authorization: "15|asjPOcDUXa14BgISbNbhTR3RndukIcAwhg8c4W5x"
  //     }
  //   });
  // }
  create_cart(product_id: number, quantity: number, selectedSize: number, selectedColor: number): Observable<any> {
    const headers = { Authorization: this.code_tokens };
    const body = { product_id, quantity, size_id: selectedSize, color_id: selectedColor };
    return this._httpClient.post<any>(this.API_URL + 'cart-add/', body, { headers });
  }


  update_quantity_cart(product_id: number, quantity: number): Observable<any> {
    const headers = { Authorization: this.code_tokens };
    const body = { quantity };
    return this._httpClient.put<any>(this.API_URL + 'cart-update/' + product_id, body, { headers });
  }

  delete_product_cart(productId: number): Observable<any> {
    const headers = { Authorization: this.code_tokens };
    return this._httpClient.delete<any>(this.API_URL + 'cart-remove/' + productId, { headers });
  }

  apply_voucher(voucherCode: string): Observable<any> {
    const headers = { Authorization: this.code_tokens };
    const body = { voucher_code: voucherCode };
    return this._httpClient.post<any>(this.API_URL + 'apply-voucher', body, { headers });
  }

  // đơn hàng thanh toán
  create_order(data: any): Observable<any> {
    const headers = { Authorization: this.code_tokens };
    // const body = { product_id, quantity };
    return this._httpClient.post<any>(this.API_URL + 'payment-order/', data, { headers });
  }


  // Route::put('/cart-update/{cartDetail}', [CartController::class, 'updateQuantity']);
  // Route::delete('/cart-remove/{cartDetail}', [CartController::class, 'removeProduct']);
  // Route::post('/apply-voucher', [CartController::class, 'applyVoucher']);


  getalluser(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'user/', {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  //order đơn hàng theo tài khoản
  get_order_customer(status: number): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'order_customer/' + status, {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  // chi tiết đơn hàng
  get_order_id(id: number): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'order_customer_detail/' + id, {
      headers: {
        Authorization: this.code_tokens,
      },
    });
  }
  update_order_status(id: number, status: number): Observable<any> {
    const body = { status: status };
    return this._httpClient.put<any>(this.API_URL + 'update_status_order_customer/' + id, body, {
      headers: {
        Authorization: this.code_tokens,
      },
    });
  }
  //     // đơn giao thành công
  // get_order_success(): Observable<any> {
  //   return this._httpClient.get<any>(this.API_URL + 'order_customer_success/', {
  //     headers: {
  //       Authorization: this.code_tokens,
  //     },
  //   });
  // }

  // // đơn hủy
  // get_order_cancel(): Observable<any> {
  //   return this._httpClient.get<any>(this.API_URL + 'order_customer_cancel/', {
  //     headers: {
  //       Authorization: this.code_tokens,
  //     },
  //   });
  // }

  // create_order(data:any): Observable<any> {
  //   return this._httpClient.post<any>(this.API_URL + 'order/',data, {
  //     headers: {
  //       Authorization: this.code_tokens
  //     }
  //   })
  // }
  get_order(id: number): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'order/' + id, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  update_order(id: number, data: any): Observable<any> {
    return this._httpClient.put<any>(this.API_URL + 'order/' + id, data, {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  delete_order(id: number): Observable<any> {
    return this._httpClient.delete<any>(this.API_URL + 'order/' + id
      ,
      {
        headers: {
          Authorization: this.code_tokens
        }
      }
    );
  }


  //product
  get_all_product(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'product/', {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  //them sản phẩm
  create_product(data: any): Observable<any> {
    return this._httpClient.post<any>(this.API_URL + 'product/', data, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  get_product(id: number): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'products/' + id
      // , {
      //   headers: {
      //     Authorization: this.code_tokens
      //   },
      // }
    )
  }
  // Front end (user)
  get_index_product(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'get_product/', {
      // headers: {
      //   Authorization: this.code_tokens
      // },
    }
    )
  };
  //detail dữ liệu theo id
  get_detail(id: number): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'get_product/' + id
      // , {
      //   headers: {
      //     Authorization: this.code_tokens
      //   },
      // }
      );
  }
  // get video user
  get_index_video(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'get_video/'
      , {
        headers: {
          Authorization: this.code_tokens
        },
      })
  };

  // get posts user
  get_index_posts(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'get_posts/'
      , {
        headers: {
          Authorization: this.code_tokens
        },
      }
    )
  };


  // detail posts user
  get_detail_posts(id: number): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'get_posts/' + id
      , {
        headers: {
          Authorization: this.code_tokens
        },
      });
  }

  get_product_by_cate(category: number): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'get_product_by_category?category=' + category
      , {
        headers: {
          Authorization: this.code_tokens
        },
      });
  }

  //banner
  get_banner(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'banner-slide/');
  }
  //filter
  get_filter_products(category_id?: number, min_price?: number, max_price?: number): Observable<any> {
    let params = new HttpParams();

    if (category_id) {
      params = params.set('category_id', category_id.toString());
    }
    if (min_price) {
      params = params.set('min_price', min_price.toString());
    }
    if (max_price) {
      params = params.set('max_price', max_price.toString());
    }

    return this._httpClient.get<any>(this.API_URL + 'filter_products/', { params });
  }
  //thông tin liên hệ
  get_store_information(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'store_information_customer/'
      , {
        headers: {
          Authorization: this.code_tokens
        },
      }
    )
  };
}




