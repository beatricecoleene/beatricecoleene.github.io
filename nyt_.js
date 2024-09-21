<<<<<<< HEAD
// TODO: enable this and remove line 5
// const API_URL =
// 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key={token}';



const API_URL = '/home.json';

const TopNews= document.getElementById('caption_');

const getpic=document.getElementById('pic')


const getTopNews= async () => {
    try{
        const info= await fetch(API_URL);
        const data= await info.json();

        return data;
    }

    catch(e){
        alert('error!', e);
        return []
    }
};

const updateContainer = (data) =>{
    TopNews.innerHTML= ' ';
   
    getpic.innerHTML = ''; 
    // (data.results || []).forEach((news)=> 
        const firstNews= data.results?.[0];
        if (firstNews){
        const newsContainer = document.createElement('div');
        newsContainer.setAttribute('class', 'article');
        const imageUrl= firstNews.multimedia[0].url
        newsContainer.innerHTML = `
         <h2>${firstNews.title}</h2>
         <p>${firstNews.byline}</p>
       
         
         `;
           
        TopNews.appendChild(newsContainer);



       
            


        getpic.innerHTML= `<img src="${imageUrl}" alt="pic"/>` ;

      const titleElement = newsContainer.querySelector('h2');
        titleElement.style.fontFamily = '"Archivo Black", sans-serif';
        titleElement.style.color='#0d1b31'

        

    

     


        
    }else{
        TopNews.innerHTML= '<p>No recent news</p>';
    }


};

(async () => {
    const data= await getTopNews();
    updateContainer(data);
})();

function showHomepage(){
    document.getElementById('hp').style.display="grid";
    document.getElementById('recent_').style.display="none";
    document.getElementById('ar').style.display="none";
    document.getElementById('bk').style.display="none";
    document.getElementById('tn').style.display="none";
    
}

function showRecent(){
    document.getElementById('hp').style.display="none";
    document.getElementById('tn').style.display="none";
    document.getElementById('ar').style.display="none";
    document.getElementById('bk').style.display="none";
    document.getElementById('recent_').style.display="grid";
}

function showMOstPopular(){
    document.getElementById('hp').style.display="none";
    document.getElementById('recent_').style.display="none"
    document.getElementById('ar').style.display="none";
    document.getElementById('bk').style.display="none";
    document.getElementById('tn').style.display="grid";
}



function showArticles(){
    document.getElementById('hp').style.display="none";
    document.getElementById('recent_').style.display="none";
    document.getElementById('tn').style.display="none";
    document.getElementById('bk').style.display="none";
    document.getElementById('ar').style.display="grid";
}
function showBooks(){
    document.getElementById('hp').style.display="none";
    document.getElementById('recent_').style.display="none";
    document.getElementById('tn').style.display="none";
    document.getElementById('ar').style.display="none";
    document.getElementById('bk').style.display="grid";
}



document.getElementById('homepage').addEventListener('click', (e)=>{
    e.preventDefault();
    showHomepage();
})

document.getElementById('recent_n').addEventListener('click', (e) =>{
    e.preventDefault();
    showRecent();
})

document.getElementById('most_pop').addEventListener('click', (e) =>{
    e.preventDefault();
    showMOstPopular();
})

document.getElementById('articles_').addEventListener('click', (e) =>{
    e.preventDefault();
    showArticles();
})

document.getElementById('books_').addEventListener('click', (e) =>{
    e.preventDefault();
    showBooks();
})




document.getElementById('homepage_h').addEventListener('click', (e)=>{
    e.preventDefault();
    showHomepage();
})

document.getElementById('recent_h').addEventListener('click', (e) =>{
    e.preventDefault();
    showRecent();
})

document.getElementById('most_pop_h').addEventListener('click', (e) =>{
    e.preventDefault();
    showMOstPopular();
})

document.getElementById('articles_h').addEventListener('click', (e) =>{
    e.preventDefault();
    showArticles();
})

document.getElementById('books_h').addEventListener('click', (e) =>{
    e.preventDefault();
    showBooks();
})



=======
// TODO: enable this and remove line 5
// const API_URL =
// 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key={token}';



const API_URL = '/home.json';

const TopNews= document.getElementById('caption_');

const getpic=document.getElementById('pic')


const getTopNews= async () => {
    try{
        const info= await fetch(API_URL);
        const data= await info.json();

        return data;
    }

    catch(e){
        alert('error!', e);
        return []
    }
};

const updateContainer = (data) =>{
    TopNews.innerHTML= ' ';
   
    getpic.innerHTML = ''; 
    // (data.results || []).forEach((news)=> 
        const firstNews= data.results?.[0];
        if (firstNews){
        const newsContainer = document.createElement('div');
        newsContainer.setAttribute('class', 'article');
        const imageUrl= firstNews.multimedia[0].url
        newsContainer.innerHTML = `
         <h2>${firstNews.title}</h2>
         <p>${firstNews.byline}</p>
       
         
         `;
           
        TopNews.appendChild(newsContainer);



       
            


        getpic.innerHTML= `<img src="${imageUrl}" alt="pic"/>` ;

      const titleElement = newsContainer.querySelector('h2');
        titleElement.style.fontFamily = '"Archivo Black", sans-serif';
        titleElement.style.color='#0d1b31'

        

    

     


        
    }else{
        TopNews.innerHTML= '<p>No recent news</p>';
    }


};

(async () => {
    const data= await getTopNews();
    updateContainer(data);
})();

function showHomepage(){
    document.getElementById('hp').style.display="grid";
    document.getElementById('recent_').style.display="none";
    document.getElementById('ar').style.display="none";
    document.getElementById('bk').style.display="none";
    document.getElementById('tn').style.display="none";
    
}

function showRecent(){
    document.getElementById('hp').style.display="none";
    document.getElementById('tn').style.display="none";
    document.getElementById('ar').style.display="none";
    document.getElementById('bk').style.display="none";
    document.getElementById('recent_').style.display="grid";
}

function showMOstPopular(){
    document.getElementById('hp').style.display="none";
    document.getElementById('recent_').style.display="none"
    document.getElementById('ar').style.display="none";
    document.getElementById('bk').style.display="none";
    document.getElementById('tn').style.display="grid";
}



function showArticles(){
    document.getElementById('hp').style.display="none";
    document.getElementById('recent_').style.display="none";
    document.getElementById('tn').style.display="none";
    document.getElementById('bk').style.display="none";
    document.getElementById('ar').style.display="grid";
}
function showBooks(){
    document.getElementById('hp').style.display="none";
    document.getElementById('recent_').style.display="none";
    document.getElementById('tn').style.display="none";
    document.getElementById('ar').style.display="none";
    document.getElementById('bk').style.display="grid";
}



document.getElementById('homepage').addEventListener('click', (e)=>{
    e.preventDefault();
    showHomepage();
})

document.getElementById('recent_n').addEventListener('click', (e) =>{
    e.preventDefault();
    showRecent();
})

document.getElementById('most_pop').addEventListener('click', (e) =>{
    e.preventDefault();
    showMOstPopular();
})

document.getElementById('articles_').addEventListener('click', (e) =>{
    e.preventDefault();
    showArticles();
})

document.getElementById('books_').addEventListener('click', (e) =>{
    e.preventDefault();
    showBooks();
})




document.getElementById('homepage_h').addEventListener('click', (e)=>{
    e.preventDefault();
    showHomepage();
})

document.getElementById('recent_h').addEventListener('click', (e) =>{
    e.preventDefault();
    showRecent();
})

document.getElementById('most_pop_h').addEventListener('click', (e) =>{
    e.preventDefault();
    showMOstPopular();
})

document.getElementById('articles_h').addEventListener('click', (e) =>{
    e.preventDefault();
    showArticles();
})

document.getElementById('books_h').addEventListener('click', (e) =>{
    e.preventDefault();
    showBooks();
})



>>>>>>> origin/main
