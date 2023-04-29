import React, { Component } from 'react'

export default class News extends Component
 {
     
    articles = [] // array it will update from line no 9 ,18 if error occoure then
    //copy paste sample.json in array 
    

    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,  //use state articles this.articles is articles array 
        }
    }
   
    async componentDidMount() {  // it will run after render and rerun again render function
        //let {country}=this.props;  //country as a props
        let {category}=this.props;
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apikey=54b13ab15ae94555944a17892a82ddf8`; // only 15 card
        let data = await fetch(url);  //fetch the url, url will update automatically 
        let parsedData = await data.json();  //convert url in json file 
        this.setState({articles: parsedData.articles }) // it update articles use state by articles array (parsedDate.article) of json file 
    }

    render() {
        
        return (
            <>
                <div>
                    <div className="container my-4">
                    
                        <h1 style={{color: "red"}}> latest news</h1>

                        <div className="row">
                            {this.state.articles.map((element) => { // map function map the each array element of articles array element is array element
                               return <div className="col-md-4" key={element.url} style={{ width: "23rem" }}  >
                                    <div className="card mt-56" >
                                        <img src={element.urlToImage == null ? "https://demofree.sirv.com/nope-not-here.jpg"
                                            : element.urlToImage} className="card-img-top" style={{ height: "15rem" }} />
                                        <div className="card-body">
                                            <h5 className="card-title">{element.title == null ? "" : element.title.slice(0, 30)}</h5>
                                            <p className="card-text">{element.description == null ? "" : element.description.slice(0, 50)}</p>
                                            <a href={element.url} target="_blank" className="btn btn-primary">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}