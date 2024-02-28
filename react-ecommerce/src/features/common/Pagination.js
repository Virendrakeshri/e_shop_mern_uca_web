import { ITEMS_PER_PAGE } from "../../app/data";
import { ChevronLeftIcon, ChevronRightIcon,StarIcon } from '@heroicons/react/20/solid'

export default function Pagination({handlePage,page,setPage,totalItems=55,filters}){
    const totalPages=Math.ceil(totalItems/ITEMS_PER_PAGE);
    return (
      <>
      <div className="flex flex-1 justify-between sm:hidden">
          <div
            onClick={(e)=>{
              handlePage(e,page>1 ?page-1 :page)
            }}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </div>
          <div
           onClick={(e)=>{
            handlePage(e,page<totalPages?page+1:page);
          }}
            
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >   
            Next
          </div>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{(page-1)*ITEMS_PER_PAGE+1}</span> to <span className="font-medium">{page*ITEMS_PER_PAGE>totalItems ? totalItems : page*ITEMS_PER_PAGE}</span> of{' '}
              <span className="font-medium">{totalItems}</span> results
            </p>
          </div>
          <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <alert
                onClick={(e)=>{
                  handlePage(e,page>1 ?page-1 :page)
                }}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </alert>
              {
                Array.from({length:Math.ceil(totalItems/ITEMS_PER_PAGE)}).map((ele,index)=>(
                  <div
                  onClick={(e)=>handlePage(e,index+1)}
                  aria-current="page"
                  className={` cursor-pointer relative z-10 inline-flex items-center ${index+1===page ? 'bg-indigo-600 text-white': 'text-gray-400'} px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                
                  
                  >
                    {
                      index+1
                    }
                    
                  </div>
                ))
              }
              <div
              onClick={(e)=>{
                handlePage(e,page<totalPages?page+1:page);
              }}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </div>
            </nav>
          </div>
        </div>
  
      </>
  
    )
  }