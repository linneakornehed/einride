import React, {Component} from 'react'

class Video extends Component { 
    render() {
        return (
            <div className="video__conatiner">
                <iframe src="https://player.vimeo.com/video/211081780?color=0AB68e&title=0&byline=0&portrait=0" 
                    width="100%" 
                    height="100%" 
                    frameborder="0" 
                    id="video-player"
                    webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>
        )
    }    

}

export default Video