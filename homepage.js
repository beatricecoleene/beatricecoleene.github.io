
// TODO: enable this and remove line 5
// const API_URL =
// 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key={token}';

const API_URL='/home.json';

const HomePage = document.getElementById('main_hp');

const gethp= async () =>{
    try{
        const res = await fetch(API_URL);
        const data= await res.json();
        return data;
    
    }catch(e){
        alert('error!' , e);
        return []; 
    }

};

const updateHomepage = (data) => { 
    HomePage.innerHTML=' ';

    (data.results || []).forEach((news)=>{
        const newcont= document.createElement('div');
        newcont.setAttribute('class', 'hp_div');
        newcont.innerHTML=`
            <h3>${news?.title}</h3>
            <p>${news?.abstract}</p>`;

        HomePage.appendChild(newcont);

        const titlehp = newcont.querySelector('h3');
        titlehp.style.fontFamily = '"Archivo Black", sans-serif';
        titlehp.style.color='#0d1b31'

        const php = newcont.querySelector('p');
        php.style.fontFamily = '"Cambria", serif';
        php.style.color='black';
        php.style.fontWeight='500';
        php.style.fontSize='1.3rem';

    });
};

(async () =>{
    const data = await gethp();
    updateHomepage(data);
})();