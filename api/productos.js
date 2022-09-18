class ProductosApi {
    constructor(){
        this.productos = [];
        this.id = 0;
    }

    listar(id){
        const prod = this.productos.find((prod) => prod.id == id);
        return prod || {error: "Producto no encontrado"};
    }

    listarAll(){
        return [...this.productos];
    }

    guardar(prod){
        const newProd= {...prod, id: ++this.id};
        this.productos.push(newProd);
        return newProd;
    }

    // actualizar(prod, id){
    //     const newProd = {id: Number(id), ...prod}
    //     const index = this.productos.findIndex((p)=> p.id == id);
    //     if(index !== -1){
    //         this.productos[index] = newProd:
    //         AAAAAAAAAAAAAAAAAAA
    //     }
    // }

    actualizar(prod,id){
        const newProd = this.productos.findIndex(producto => producto.id == id);
        if(newProd != -1){
            this.productos[newProd].title = obj.title || this.productos[newProd].title;
            this.productos[newProd].price = obj.price || this.productos[newProd].price;
            this.productos[newProd].thumbnail = obj.thumbnail || this.productos[newProd].thumbnail;
            return this.productos[newProd]
        }return false
    }


    borrar(id){
        const newProd = this.productos.findIndex(prod=>prod.id ==id)
        if(index != -1){
            this.productos.filter((producto)=>(producto.id !=id));
            return true
        }return false
    }

}

const productos = new ProductosApi('./public/products.txt');

module.exports = ProductosApi