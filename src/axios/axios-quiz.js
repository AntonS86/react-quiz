import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-47f81.firebaseio.com/'
})