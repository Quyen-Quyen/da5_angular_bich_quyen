import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { testapi, users } from '../models/admin';

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
  register(data:any): Observable<any> {
    return this._httpClient.post<any>(this.API_URL + 'register_customer',data);
  }
  logout(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'logout', {
      headers: {
        Authorization: this.code_tokens,
      },
    });
  }


  //chức năng giỏ hàng
  // danh sách sản phẩm của
  getallcart(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'cart/', {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  create_cart(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'cart-add/', {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }



  

  getalluser(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'user/', {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
   //order
   get_all_order(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'order/', {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  create_order(data:any): Observable<any> {
    return this._httpClient.post<any>(this.API_URL + 'order/',data, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
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
  create_product(data:any): Observable<any> {
    return this._httpClient.post<any>(this.API_URL + 'product/',data,{
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  get_product(id: number): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'product/' + id, {
      headers: {
        Authorization: this.code_tokens
      },
      // {  var formData = new FormData(),
      //   formData.append('file', this.postForm.value)
      // }

    })
  }
  // Front end (user)
  get_index_product(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'get_product/')};
 //detail dữ liệu theo id
 get_detail(id: number): Observable<any> {
  return this._httpClient.get<any>(this.API_URL + 'get_product/' + id);
}
// get video user
get_index_video(): Observable<any> {
  return this._httpClient.get<any>(this.API_URL + 'get_video/')};

  // get posts user
get_index_posts(): Observable<any> {
  return this._httpClient.get<any>(this.API_URL + 'get_posts/')};

  // detail posts user
get_detail_posts(id: number): Observable<any> {
  return this._httpClient.get<any>(this.API_URL + 'get_posts/' + id);
}

get_product_by_cate(category: number): Observable<any> {
  return this._httpClient.get<any>(this.API_URL + 'get_product_by_category?category='+ category);
}
}




