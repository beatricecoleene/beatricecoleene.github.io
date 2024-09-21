
const API_URL='/hardcover-fiction.json';

const Books = document.getElementById('books_main');

const getbooks= async () =>{
    try{
        const res = await fetch(API_URL);
        const data= await res.json();
        return data;
    
    }catch(e){
        alert('error!' , e);
        return []; 
    }

};

const updateBooks = (data) => { 
    Books.innerHTML=' ';

    (data.results.books || []).forEach((book)=>{
        const newbook= document.createElement('div');
      
        newbook.setAttribute('class', 'books_div');
        newbook.innerHTML=`
            <h5>${book?.rank}</h5>
            <h4>${book?.title}</h4>
            
            <p>${book?.description}</p>
            `;

        Books.appendChild(newbook);

        const titlebook = newbook.querySelector('h4');
        titlebook.style.fontFamily = '"Archivo Black", sans-serif';
        titlebook.style.color='#0d1b31'

        const bhp = newbook.querySelector('p');
        bhp.style.fontFamily = '"Cambria", serif';
        bhp.style.color='black';
        bhp.style.fontWeight='500';
        bhp.style.fontSize='1.3rem';

    });
};

(async () =>{
    const data = await getbooks();
    updateBooks(data);
})();