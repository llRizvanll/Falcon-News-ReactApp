import React from 'react';
import axios from 'axios';
import "tabler-react/dist/Tabler.css";
import C3Chart from "react-c3js";
import {Card,Nav, Grid, BlogCard} from "tabler-react";

class Categories extends React.Component{
    state = {
        headlinesNews: [],
        isLoading: true,
        errors: null,
        urlParams: this.props.match.params
    };

    getUsers(catName) {

      if (catName === 'covid'){
          catName = '5f57622a4d8ce411138b3bf4';
      }
      else if (catName === 'WSJ'){
          catName = '5f5763ae993a2e110d40e2c5';
      }
      else if (catName === 'Google'){
          catName =  '5f5763d84d8ce411138b3cfc';
      }
      else if (catName === 'Technology'){
        catName =  '5f5763f9993a2e110d40e2f5';
      }
      else if (catName === 'India'){
        catName =  '5f57641f514ec5112d18b878';
      }
      else if (catName === 'Canada'){
        catName =  '5f57643c993a2e110d40e322';
      }
      else if (catName === 'World'){
        catName =  '5f57645a993a2e110d40e33b';
      }
      else {
        catName = '5f5764924d8ce411138b3d73';
      }
      //gooogle - https://api.jsonbin.io/b/5f5763d84d8ce411138b3cfc
      //Technology - https://api.jsonbin.io/b/5f5763f9993a2e110d40e2f5
      //India - https://api.jsonbin.io/b/5f57641f514ec5112d18b878
      //canada - https://api.jsonbin.io/b/5f57643c993a2e110d40e322
      //world - https://api.jsonbin.io/b/5f57645a993a2e110d40e33b
      
      
        // I have used axios instead of Fetch
        // axios.get('https://newsapi.org/v2/everything',{
        //     params: {q: catName, apiKey: '49ec45d262b4417b942ac9c9b5324cd5'}
        // })

        axios.get('https://api.jsonbin.io/b/'+catName,{
            headers:{'secret-key':'$2b$10$iDDpCRnCdMAcLpjqoygl2OKRLuvFjB1kP4JcQx3J6pKuZofzsCM/e'}
        })
          // mapping the API endpoints to props
          .then(response =>
            response.data.articles.map(news => ({
              title: `${news.title}`,
              description: `${news.description.substr(0,50)}`,
              author: `${news.author}`,
              newsurl: `${news.url}`,
              url: `${news.urlToImage}`,
              content: `${news.content}`
            }))
          )
          // Updating loading state
          .then(headlinesNews => {
            this.setState({
              headlinesNews,
              isLoading: false
            });
          })
          // using the `.catch()` method since axios is promise-based
          .catch(error => this.setState({ error, isLoading: false }));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params !== this.props.match.params) {
          const currentName = nextProps.match.params
          this.getUsers(currentName);
          this.setState({
            urlParams: currentName
          })
        }
      }

    componentDidMount() {
        const { name } = this.props.match.params;
        this.getUsers(name);
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

export default Categories;