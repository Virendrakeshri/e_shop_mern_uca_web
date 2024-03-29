import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts ,fetchProductsByFilters,fetchCategories,fetchbrands, fetchProductById, createProduct, updateProduct} from './productListApi';




const initialState = {
  products: [],
  status: 'idle',
  totalItems:98,
  brands:[],
  categories:[],
  SelectedProduct:null,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchAllProductsAsync = createAsyncThunk(
  'product/fetchAllProducts',
  async () => {
    const response = await fetchAllProducts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchProductsByFiltersAsync = createAsyncThunk(
  'product/fetchProductsByFilters',
  async ({filter,Sort,pagination}) => {
    const response = await fetchProductsByFilters(filter,Sort,pagination);
    console.log("The res headers", response.headers);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchProductsByIdAsync = createAsyncThunk(
  'product/fetchProductById',
  async (id) => {
    const response = await fetchProductById(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchBrandsAsync = createAsyncThunk(
  'product/fetchBrands',
  async () => {
    const response = await fetchbrands();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchCategoriesAsync =createAsyncThunk(
  'product/fetchCategories',
  async()=>{
    const response=await fetchCategories();
    return response.data;  
  }

)
export const createProductAsync = createAsyncThunk(
  'product/createProduct',
  async (product) => {
    const response = await createProduct(product);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const updateProductAsync = createAsyncThunk(
  'product/updateProduct',
  async (product) => {
    const response = await updateProduct(product);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);







export const productSlice = createSlice({
  name: 'product',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
   
    clearSelectedProduct:(state)=>{
      state.SelectedProduct=null
    }
  },
  extraReducers:(builder)=>{
   

    builder
    .addCase(fetchAllProductsAsync.pending,(state,action)=>{
      state.status='loading';

    })
    .addCase(fetchAllProductsAsync.fulfilled,(state,action)=>{
      
      state.status='idle';
      state.products=action.payload.products;
      state.totalItems=action.payload.totalItems;
    


    })
    .addCase(fetchProductsByFiltersAsync.pending,(state,action)=>{
      state.status='loading';
      


    })
    .addCase(fetchProductsByFiltersAsync.fulfilled,(state,action)=>{
    
      state.status = 'idle';
      state.products = action.payload.products;
      state.totalItems = action.payload.totalItems;

    })
    .addCase(fetchBrandsAsync.pending,(state,action)=>{
      state.status='loading';
      
    })
    .addCase(fetchBrandsAsync.fulfilled,(state,action)=>{
      state.brands=action.payload;
      state.status='idle';
      
    })
    .addCase(fetchCategoriesAsync.pending,(state,action)=>{
      state.status='pending';
      
    })
    .addCase(fetchCategoriesAsync.fulfilled,(state,action)=>{
      state.status='pending';
      state.categories=action.payload;
    })
    .addCase(fetchProductsByIdAsync.pending,(state,action)=>{
      state.status='pending';
      state.SelectedProduct=null;
    })
    .addCase(fetchProductsByIdAsync.fulfilled,(state,action)=>{
      state.SelectedProduct=action.payload;
    })
    .addCase(createProductAsync.pending,(state,action)=>{
      state.status='pending';
     

    })
    .addCase(createProductAsync.fulfilled,(state,action)=>{
      state.status='idle';
      state.products.push(action.payload);
    })
    .addCase(updateProductAsync.pending,(state,action)=>{
      state.status='pending';
     

    })
    .addCase(updateProductAsync.fulfilled,(state,action)=>{
      state.status='idle';
      const index=state.products.findIndex((product)=>product.id===action.payload.id);
      state.products[index]=action.payload;
    })
    // .addCase(fetchAllProducts.fulfilled,(state,action)=>{
    //   state.status='idle';
    //   state.totalItems=10000;
    // })
   
    


    
    
  }
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  
});


export const { increment} = productSlice.actions;
export const { clearSelectedProduct} = productSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`


// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const selectAllProducts=(state)=>state.product.products;
export const selectTotalItems=(state)=>state.product.totalItems;
export const selectcategories=(state)=>state.product.categories;
export const selectbrands=(state)=>state.product.brands;

 

export default productSlice.reducer;
