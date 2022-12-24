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
    return this._httpClient.post<any>(this.API_URL + 'login', data);
  }
  

  register(data:any): Observable<any> {
    return this._httpClient.post<any>(this.API_URL + 'register',data);
  }
  getalluser(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'user/', {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  // getalluser(): Observable<users[]> {
  //   return this._httpClient.get<users[]>(this.API_URL+'user/', {
  //     headers: {
  //       Authorization: this.code_tokens
  //     }
  //   });
  // }
  // getalltestapi():Observable<testapi[]>{
  //   return this._httpClient.get<testapi[]>(this.API_URL+'testdb/');
  //  }

  // dashboard
  getalldashboard(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'dashboard/', {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }

  // Test api 
  getalltestapi(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'testdb/', {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  create(data: any): Observable<any> {
    return this._httpClient.post<any>(this.API_URL + 'testdb/', data, {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  //show dữ liệu theo id
  getedit(id: number): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'testdb/' + id, {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  update(id: number, data: any): Observable<any> {
    return this._httpClient.put<any>(this.API_URL + 'testdb/' + id, data, {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  delete(id: number): Observable<any> {
    return this._httpClient.delete<any>(this.API_URL + 'testdb/' + id
      ,
      {
        headers: {
          Authorization: this.code_tokens
        }
      }
    );
  }

  // category-product
  getallcategory_product(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'category_product/', {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  create_category_product(data:any): Observable<any> {
    return this._httpClient.post<any>(this.API_URL + 'category_product/',data, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  get_category(id: number): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'category_product/' + id, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  update_category(id: number, data: any): Observable<any> {
    return this._httpClient.put<any>(this.API_URL + 'category_product/' + id, data, {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  delete_category(id: number): Observable<any> {
    return this._httpClient.delete<any>(this.API_URL + 'category_product/' + id
      ,
      {
        headers: {
          Authorization: this.code_tokens
        }
      }
    );
  }

  //customer
  get_all_customer(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'customer/', {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  create_customer(data:any): Observable<any> {
    return this._httpClient.post<any>(this.API_URL + 'customer/',data, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  get_customer(id: number): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'customer/' + id, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  update_customer(id: number, data: any): Observable<any> {
    return this._httpClient.put<any>(this.API_URL + 'customer/' + id, data, {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  delete_customer(id: number): Observable<any> {
    return this._httpClient.delete<any>(this.API_URL + 'customer/' + id
      ,
      {
        headers: {
          Authorization: this.code_tokens
        }
      }
    );
  }


  //info_supplier
  get_all_info_supplier(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'info_supplier/', {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  create_info_supplier(data:any): Observable<any> {
    return this._httpClient.post<any>(this.API_URL + 'info_supplier/',data, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  get_info_supplier(id: number): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'info_supplier/' + id, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  update_info_supplier(id: number, data: any): Observable<any> {
    return this._httpClient.put<any>(this.API_URL + 'info_supplier/' + id, data, {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  delete_info_supplier(id: number): Observable<any> {
    return this._httpClient.delete<any>(this.API_URL + 'info_supplier/' + id
      ,
      {
        headers: {
          Authorization: this.code_tokens
        }
      }
    );
  }


   //staff
   get_all_staff(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'staff/', {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  create_staff(data:any): Observable<any> {
    return this._httpClient.post<any>(this.API_URL + 'staff/',data, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  get_staff(id: number): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'staff/' + id, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  update_staff(id: number, data: any): Observable<any> {
    return this._httpClient.put<any>(this.API_URL + 'staff/' + id, data, {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  delete_staff(id: number): Observable<any> {
    return this._httpClient.delete<any>(this.API_URL + 'staff/' + id
      ,
      {
        headers: {
          Authorization: this.code_tokens
        }
      }
    );
  }


   //order_history
   get_all_order_history(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'order_history/', {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  create_order_history(data:any): Observable<any> {
    return this._httpClient.post<any>(this.API_URL + 'order_history/',data, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  get_order_history(id: number): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'order_history/' + id, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  update_order_history(id: number, data: any): Observable<any> {
    return this._httpClient.put<any>(this.API_URL + 'order_history/' + id, data, {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  delete_order_history(id: number): Observable<any> {
    return this._httpClient.delete<any>(this.API_URL + 'order_history/' + id
      ,
      {
        headers: {
          Authorization: this.code_tokens
        }
      }
    );
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


   //posts
   get_all_posts(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'posts/', {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  create_posts(data:any): Observable<any> {
    return this._httpClient.post<any>(this.API_URL + 'posts/',data, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  get_posts(id: number): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'posts/' + id, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  update_posts(id: number, data: any): Observable<any> {
    return this._httpClient.put<any>(this.API_URL + 'posts/' + id, data, {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  delete_posts(id: number): Observable<any> {
    return this._httpClient.delete<any>(this.API_URL + 'posts/' + id
      ,
      {
        headers: {
          Authorization: this.code_tokens
        }
      }
    );
  }
   //product_supplier
   get_all_product_supplier(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'product_supplier/', {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  create_product_supplier(data:any): Observable<any> {
    return this._httpClient.post<any>(this.API_URL + 'product_supplier/',data, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  get_product_supplier(id: number): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'product_supplier/' + id, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  update_product_supplier(id: number, data: any): Observable<any> {
    return this._httpClient.put<any>(this.API_URL + 'product_supplier/' + id, data, {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  delete_product_supplier(id: number): Observable<any> {
    return this._httpClient.delete<any>(this.API_URL + 'product_supplier/' + id
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
  update_product(id: number, data: any): Observable<any> {
    return this._httpClient.put<any>(this.API_URL + 'product/' + id, data, {
      headers: {
        Authorization: this.code_tokens,
        // 'Content-Type': 'application/json'
      }
    });
  }
  delete_product(id: number): Observable<any> {
    return this._httpClient.delete<any>(this.API_URL + 'product/' + id
      ,
      {
        headers: {
          Authorization: this.code_tokens
        }
      }
    );
  }
   //transport
   get_all_transport(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'transport/', {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  create_transport(data:any): Observable<any> {
    return this._httpClient.post<any>(this.API_URL + 'transport/',data, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  get_transport(id: number): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'transport/' + id, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  update_transport(id: number, data: any): Observable<any> {
    return this._httpClient.put<any>(this.API_URL + 'transport/' + id, data, {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  delete_transport(id: number): Observable<any> {
    return this._httpClient.delete<any>(this.API_URL + 'transport/' + id
      ,
      {
        headers: {
          Authorization: this.code_tokens
        }
      }
    );
  }


   //type_posts
   get_all_type_posts(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'type_posts/', {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  create_type_posts(data:any): Observable<any> {
    return this._httpClient.post<any>(this.API_URL + 'type_posts/',data, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  get_type_posts(id: number): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'type_posts/' + id, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  update_type_posts(id: number, data: any): Observable<any> {
    return this._httpClient.put<any>(this.API_URL + 'type_posts/' + id, data, {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  delete_type_posts(id: number): Observable<any> {
    return this._httpClient.delete<any>(this.API_URL + 'type_posts/' + id
      ,
      {
        headers: {
          Authorization: this.code_tokens
        }
      }
    );
  }
   //type_video
   get_all_type_video(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'type_video/', {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  create_type_video(data:any): Observable<any> {
    return this._httpClient.post<any>(this.API_URL + 'type_video/',data, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  get_type_video(id: number): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'type_video/' + id, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  update_type_video(id: number, data: any): Observable<any> {
    return this._httpClient.put<any>(this.API_URL + 'type_video/' + id, data, {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  delete_type_video(id: number): Observable<any> {
    return this._httpClient.delete<any>(this.API_URL + 'type_video/' + id
      ,
      {
        headers: {
          Authorization: this.code_tokens
        }
      }
    );
  }
   //video
   get_all_video(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'video/', {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  create_video(data:any): Observable<any> {
    return this._httpClient.post<any>(this.API_URL + 'video/',data, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  get_video(id: number): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'video/' + id, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  update_video(id: number, data: any): Observable<any> {
    return this._httpClient.put<any>(this.API_URL + 'video/' + id, data, {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  delete_video(id: number): Observable<any> {
    return this._httpClient.delete<any>(this.API_URL + 'video/' + id
      ,
      {
        headers: {
          Authorization: this.code_tokens
        }
      }
    );
  }
   //warehouse
   get_all_warehouse(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'warehouse/', {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  create_warehouse(data:any): Observable<any> {
    return this._httpClient.post<any>(this.API_URL + 'warehouse/',data, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  get_warehouse(id: number): Observable<any> {
    return this._httpClient.get<any>(this.API_URL + 'warehouse/' + id, {
      headers: {
        Authorization: this.code_tokens
      }
    })
  }
  update_warehouse(id: number, data: any): Observable<any> {
    return this._httpClient.put<any>(this.API_URL + 'warehouse/' + id, data, {
      headers: {
        Authorization: this.code_tokens
      }
    });
  }
  delete_warehouse(id: number): Observable<any> {
    return this._httpClient.delete<any>(this.API_URL + 'warehouse/' + id
      ,
      {
        headers: {
          Authorization: this.code_tokens
        }
      }
    );
  }






  /// User


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


 

