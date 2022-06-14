import React from 'react';

export function VideoTile({imageUrl, altText}) {
    return (
        <div className="video-tile__thumbnail">
            <div className="thumbnail-overlay"></div>
            <img src={imageUrl} alt={altText} />
            <div className="button thumbnail-button"></div>
        </div>
    );
}