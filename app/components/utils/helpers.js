import axios from 'axios';

const helpers = {
    runQuery: (term, start, end) => {

        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
            params: {
                'api-key': "6db6c6b8202f4c4981d7c14b2e518663",
                'q': term,
                'begin_date': start + "0101",
                'end_date': end + "1231",
                'sort': "newest",
                'fl': "web_url,headline,pub_date",
                'page': 0
            }
        }).then(response => {
            let articles = [];
            response.data.response.docs.forEach(article => {
                let title = article.headline.main,
                    pubDate = article.pub_date,
                    url = article.web_url;
                articles.push({
                    title: title,
                    date: pubDate,
                    url: url
                })

            });
            return articles;
        }).catch(error => {
            console.log('error ' + error);
        })

    },
    saveData: data => {
        return axios.post('/article', data);
    },
    getResult: () => {
        return axios.get('/getarticles')
            .then(response => {
                return response.data;
            })
    }
};

export default helpers;