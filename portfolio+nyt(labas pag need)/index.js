
import './main.css';
import './mq.css';
import {gethp} from './homepage.js';
import { getScience } from './science.js';
import { getpopular } from './popular.js';
import {getTopNews} from './nyt_.js';




(async () => {
    await getpopular();
    await getTopNews();
    await gethp();
    await getScience();
   
})();