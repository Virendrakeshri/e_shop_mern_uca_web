// A mock function to mimic making an async request for data
export   function fetchAllProducts() {
  //todo: we will not hard code serveer url here;
  return new Promise(async (resolve) =>{
    const response=await fetch('http://localhost:8080/products');
    const data=await response.json();
    resolve({data});
  }
    
  );
}
export function fetchProductById(id) {
  //todo: we will not hard code serveer url here;
  return new Promise(async (resolve) =>{
    const response=await fetch(`http://localhost:8080/products/${id}`);
    const data=await response.json();
    resolve({data});
  }
    
  );
}
export   function fetchProductsByFilters(filter,Sort,pagination) {
  //todo: we will not hard code serveer url here;
  // todo:on server we will support multiple values;
  // filter={"category":["smartphone","laptops"]}
  // Sort={_sort:"price",_order="asc"};
  // pagination={_page=1 &_limit=10};

  let queryString='';
  for(let key in filter){
    const categoryValues=filter[key];
    if(categoryValues.length>=1){
      const lastcategory=categoryValues[categoryValues.length-1];
      queryString+=`${key}=${lastcategory}&`;
    }
   
    

  }
  

  for(let key in Sort){
    queryString+=`${key}=${Sort[key]}&`
  }
  for(let key in pagination){
    queryString+=`${key}=${pagination[key]}&`
  }
  console.log(queryString);

  


  return new Promise(async (resolve) =>{
    const response=await fetch(`http://localhost:8080/products?${queryString}`);
    const data=await response.json();
    const totalItems=await response.headers.get('X-Total-Count'); 
    resolve({data:{products:data,totalItems:+totalItems}});
  }
    
  );
}
export function fetchCategories(){
  return new Promise(async(resolve)=>{
    const response=await fetch(`http://localhost:8080/categories`);
    const data=await response.json();
    resolve({data});


  })

}
export function fetchbrands(){
  return new Promise(async(resolve)=>{
    const response=await fetch(`http://localhost:8080/brands`);
    const data=await response.json();
    resolve({data});


  })

}
