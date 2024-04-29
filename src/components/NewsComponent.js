import React, { Component } from "react";
import Newsitems from "./Neswitems"; // Corrected the import

export class NewsComponent extends Component {
  constructor() {
    console.log("ctor");
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    console.log("cdm");
    let url =
      "https://newsapi.org/v2/everything?q=tesla&from=2023-10-11&sortBy=publishedAt&apiKey=8cf10f2932cc4686b98db72461409239";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    console.log("render wala le");
    return (
      <>
        <div className="container my-3">
          <h1>Top Headlines</h1>
          <div className="row">
            {this.state.articles.map((element) => {
              // Changed from this.state.article to this.state.articles
              return (
                <div className="col-md-3" key={element.url}>
                  <Newsitems // Corrected the component name to Newsitems
                    title={element.title}
                    description={element.description}
                    img={element.urlToImage}
                    newsurl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default NewsComponent;
