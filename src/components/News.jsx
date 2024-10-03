import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }


    articles = [
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Journey across starburst galaxy NGC 4449 in amazing Gemini observatory view - VideoFromSpace",
            "description": "NGC 4449 is a galaxy that is ablaze with stars in the process of being formed. Galaxies such as this are referred to as “starburst galaxies.” The video shows...",
            "url": "https://www.youtube.com/watch?v=-zedwBh0zC4",
            "urlToImage": "https://i.ytimg.com/vi/-zedwBh0zC4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgUihRMA8=&rs=AOn4CLDgmr8KPX97zbGJRkCTmSx5Q8dCzw",
            "publishedAt": "2024-07-01T17:30:00Z",
            "content": null
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TOI Lifestyle Desk",
            "title": "NASA warns that a tower-sized 370-ft asteroid is heading towards Earth at a speed of 33,673 kmph - The Times of India",
            "description": "NASA warns of asteroid 2024 JJ25, measuring 370 feet and traveling at 33,673 kmph, approaching Earth today. Discovered by the Pan-STARRS 1 telescope, it will pass within 4 million kilometers, prompting close monitoring but no collision concerns. This event of…",
            "url": "https://timesofindia.indiatimes.com/etimes/trending/nasa-warns-that-a-tower-sized-370-ft-asteroid-is-heading-towards-earth-at-a-speed-of-33673-kmph/articleshow/111404104.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-111404055,width-1070,height-580,imgsize-76996,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-07-01T15:30:00Z",
            "content": null
        },
    ]


    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1
        }
        console.log("From constructor")
    }

    async fetchNews() {
        const { country, category } = this.props;
        const { page } = this.state;
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=571703c6a29c4a37b9cde1248ed1c49c&page=${page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
    }

    componentDidMount() {
        this.fetchNews(); // Initial data fetch
    }

    componentDidUpdate(prevProps) {
        // Only fetch news if country or category has changed
        if (prevProps.country !== this.props.country || prevProps.category !== this.props.category) {
            this.fetchNews();
        }
    }

    handlePreviousClick = async () => {
        this.setState(
            (prevState) => ({ page: prevState.page - 1 }),
            this.fetchNews
        );
    }

    handleNextClick = async () => {
        this.setState(
            (prevState) => ({ page: prevState.page + 1 }),
            this.fetchNews
        );
    }


    // handlePreviousClick = async () => {
    //     console.log("Previous");
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=571703c6a29c4a37b9cde1248ed1c49c&page=${this.state.page - 1}`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     console.log(parsedData);

    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parsedData.articles
    //     })
    // }

    // handleNextClick = async () => {
    //     console.log("Next");

    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=571703c6a29c4a37b9cde1248ed1c49c&page=${this.state.page + 1}`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     console.log(parsedData);

    //     this.setState({
    //         page: this.state.page + 1,
    //         articles: parsedData.articles
    //     })
    // }
    


    render() {
        console.log("renderr")
        return (
            <>
                <div className='w-full grid grid-cols-3 gap-5'>
                    {this.state.articles.map((element, i) => {
                        return (
                            <NewsItem
                                key={i}
                                title={element.title}
                                imgURL={element.urlToImage}
                                newsURL={element.url}
                                publisher={element.source.name}
                                time={element.publishedAt}
                            />
                        )
                    })}
                </div>

                <div className='w-full flex justify-between items-center px-5 py-10'>
                    <button onClick={this.handlePreviousClick} className='bg-indigo-200 font-medium px-4 py-2 rounded-md hover:bg-indigo-300'>Previous</button>
                    <p>Page {this.state.page}</p>
                    <button onClick={this.handleNextClick} className='bg-indigo-200 font-medium px-4 py-2 rounded-md hover:bg-indigo-300'>Next</button>
                </div>
            </>
        )
    }
}

export default News;

