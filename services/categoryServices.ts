interface Category{
    id:number, 
    name:string
  }
  
  export class CategoryService{
      categories: Category[]
      constructor(){
          this.categories =  [{id:1, name: "Electronics"}, {id:2, name:"Clothes"}]
      }
      getCategories():Category[]{
          return this.categories;
      }
      getSingleCategory(id: number){
          return this.categories.find(p=>p.id===id)
      }
      addCategory(name:string){
          const newCategory = { id:this.categories.length + 1, name };
          this.categories.push(newCategory);
          return newCategory;
      }
      updateCategory(id:number, name: string){
          const category = this.categories.find(cat => cat.id === id);
          if(category){
              category.name = name
          }
          return category;
      }
      deleteCategory(id:number){
          const index = this.categories.findIndex(cat => cat.id === id);
          if (index !== -1) {
            this.categories.splice(index, 1);
          } 
          return index;
      }
  }