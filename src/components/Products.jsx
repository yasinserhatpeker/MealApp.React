export default function Products() {
  
   const response = fetch('http:/localhost:3000/meals');
     
     return (
        <ul id="meals"></ul>
     )
}