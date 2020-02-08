import React from "react";
import PropTypes from "prop-types";
import "./Image.css";

function Image({ nasa_id, date, title, description, href, keywords }) {
    return (
        <div className="image">
            <img src={href} alt={title} title={title}></img>
            <div className="image_data">
                <h3 className="image_title">{title}</h3>
                <ul className="keywords">
                    {keywords.map((keyword,index) => (
                        <li key={index} className="keywords_keyword">{keyword}</li>
                    ))}
                </ul>
                <h5 className="image_date">{date}</h5>
                <p className="image_description">{description.slice(0, 150)}...</p>
            </div>
        </div>
    );
}

Image.propTypes = {
    nasa_id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    keywords: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Image;