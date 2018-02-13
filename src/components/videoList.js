import React from 'react';
import VideoListItem from './videoListItem';
// Plain functional component
const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return <VideoListItem
							onVideoSelect={props.onVideoSelect}
							key={video.etag} // We need a key to identify video item to perform rendering
							video={video} /> 
	});
	return (
		<ul className="col-md-4 list-group">
				{videoItems}
		</ul>
	);
};

export default VideoList;