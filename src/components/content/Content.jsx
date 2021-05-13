import { Container } from '@material-ui/core';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './Content.css';

function Content({ news }) {
    return (
        <Container maxWidth="md">
            <div className="content">
                <div className="content__ad">
                    <span className="ad__text">
                        For the best experience use inshorts app on your smartphone
                    </span>
                    <img src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="app store" />
                    <img src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="play store" />
                </div>
                {news.map((newsItem, index) => (
                    <NewsCard newsItem={newsItem} key={index} />
                ))}

            </div>
        </Container>
    )
}

export default Content;
