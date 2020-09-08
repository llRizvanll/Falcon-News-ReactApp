import React from 'react';
import axios from 'axios';
import "tabler-react/dist/Tabler.css";
import C3Chart from "react-c3js";
import {Card,Nav, Grid, BlogCard} from "tabler-react";

class Headlines extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            headlinesNews: [],
            isLoading: true,
            errors: null
        };
    }

    getUsers(catags) {
        // We're using axios instead of Fetch
        // axios.get('https://newsapi.org/v2/top-headlines',{
        //     params: {country: catags, apiKey: '49ec45d262b4417b942ac9c9b5324cd5'}
        // })
        axios.get('https://api.jsonbin.io/b/5f5764924d8ce411138b3d73',{
            headers:{'secret-key':'$2b$10$iDDpCRnCdMAcLpjqoygl2OKRLuvFjB1kP4JcQx3J6pKuZofzsCM/e'}
        })
        //https://api.jsonbin.io/b/5f5764924d8ce411138b3d73
          // Once we get a response, we'll map the API endpoints to our props
          .then(response =>
            response.data.articles.map(news => ({
              title: `${news.title}`,
              description: `${news.description}`,
              author: `${news.author}`,
              newsurl: `${news.url}`,
              url: `${news.urlToImage}`,
              content: `${news.content}`
            }))
          )
          // Let's make sure to change the loading state to display the data
          .then(headlinesNews => {
            this.setState({
              headlinesNews,
              isLoading: false
            });
          })
          // We can still use the `.catch()` method since axios is promise-based
          .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.getUsers('us')
    }

    render(){
        const { isLoading, headlinesNews } = this.state;
        return (
            <React.Fragment>
                <Grid.Row cards deck>
                  {!isLoading ? (
                  headlinesNews.map(news => {
                      const { title, description, author, newsurl, url, content } = news;
                      return ( 
                              <Grid.Col md={4}>  
                                <BlogCard 
                                title={title}
                                imgSrc={url}
                                avatarImgSrc="https://tabler.github.io/tabler/demo/faces/female/18.jpg"
                                authorName={author}
                                description={content}
                                postUrl={newsurl}
                                iconHref={newsurl}
                                url={newsurl}
                                profileHref={newsurl}
                                >
                                      {/* {
                                          <div >
                                            <div style={{margin:"10px"}}>
                                                <span >
                                                    <h2>{title}</h2>
                                                </span>
                                                <p>
                                                    <span className="">
                                                        {author}
                                                    </span>
                                                </p>
                                                
                                                  <div style={{margin:"20px"}}>
                                                  <Card body={
                                                    <img src={url} alt="" />
                                                  }>
                                                    </Card>
                                                  </div>
                                                
                                                  <div style={{height:"100px"}}>
                                                    <p>
                                                      {description}<br />
                                                      {content}
                                                    </p>
                                                    <a href={newsurl} target="_blank" rel="noopener noreferrer">Read full news</a>
                                                  </div>
                                                  
                                              </div>
                                        </div>
                                    } */}
                                </BlogCard>  
                              </Grid.Col>
                                
                                
                      );
                  })
                  
                  ) : (
                  <p>Loading...</p>
                  )}
                  </Grid.Row>
              
              </React.Fragment>
              
            
        );
    }
}

export default Headlines;


