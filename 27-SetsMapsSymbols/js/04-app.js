const producto ={
    idProducto:10
}
const waekmap=new WeakMap();

waekmap.set(producto,'Monitor');

console.log(wakmap.has(producto));
console.log(weakmap.get(producto));
console.log(weakmap.delete(producto));
console.log(weakmap);
