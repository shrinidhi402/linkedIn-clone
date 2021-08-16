import React from 'react'
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__left">
                <FiberManualRecordIcon />
            </div>
            <div className="right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>
            {newsArticle("IM back", "About to finish my Linkedin Clone")}
            {newsArticle("coronavirus outbreak", "About to finish my Linkedin Clone")}
            {newsArticle("MS in USA", "About to finish my Linkedin Clone")}
            {newsArticle("MS in USA", "About to finish my Linkedin Clone")}
            {newsArticle("MS in USA", "About to finish my Linkedin Clone")}
            {newsArticle("Latest software Updates", "About to finish my Linkedin Clone")}
        </div>

    )
}

export default Widgets
