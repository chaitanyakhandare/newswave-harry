import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItem extends Component {
    static propTypes = {}

    formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    timeAgo(dateString) {
        const now = new Date();
        const date = new Date(dateString);
        const seconds = Math.floor((now - date) / 1000);

        let interval = Math.floor(seconds / 31536000);
        if (interval >= 1) {
            return interval === 1 ? "1 year ago" : `${interval} years ago`;
        }

        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
            return interval === 1 ? "1 month ago" : `${interval} months ago`;
        }

        interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
            return interval === 1 ? "1 day ago" : `${interval} days ago`;
        }

        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
            return interval === 1 ? "1 hour ago" : `${interval} hours ago`;
        }

        interval = Math.floor(seconds / 60);
        if (interval >= 1) {
            return interval === 1 ? "1 minute ago" : `${interval} minutes ago`;
        }

        return seconds < 10 ? "just now" : `${seconds} seconds ago`;
    }

    openExternalLink = (url) => {
        window.open(url, "_blank");
    }


    render() {

        const { title, imgURL, newsURL, publisher, time } = this.props;

        return (
            <div className='col-span-1 border border-slate-300 bg-white rounded-2xl p-3 grid grid-rows-5 hover:border-slate-500 hover:cursor-pointer hover:bg-indigo-50 transition-all' onClick={ () => this.openExternalLink(newsURL) }>
                <div className="row-span-3 p-2 flex items-center justify-center">
                    <img src={imgURL ? imgURL : '/tempNewsImg.jpg'} className='rounded-xl' alt="" />
                </div>
                <div className='row-span-2 p-3 flex flex-col justify-center space-y-3'>
                    <div className='space-y-1'>
                        <p className='text-slate-400 font-semibold tracking-wide text-sm'>{this.formatDate(time)}</p>
                        <h3 className='line-clamp-2 font-semibold text-base hover:underline'>{title}</h3>
                    </div>
                    <hr className='w-2/5 self-center' />
                    <div className='flex items-center justify-between'>
                        <h3 className='line-clamp-1 font-medium text-sm'>{publisher}</h3>
                        <p className='text-slate-400 font-medium tracking-wide text-sm'>{this.timeAgo(time)}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem;