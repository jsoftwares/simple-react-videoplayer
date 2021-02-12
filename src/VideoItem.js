import React from 'react';


const VideoItem = ({video}) => {
    return(
        <div className="item">
            <img src={video.snippet.thumbnails.high.url} />
            {video.snippet.title}
        </div>
    );
}

export default VideoItem;