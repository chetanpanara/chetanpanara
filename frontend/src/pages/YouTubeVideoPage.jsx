import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const videoData = [
  {
    id: '5vmyYPvW88k',
    title: 'How to Make Registration Form Using HTML & CSS',
    description: 'How to Make Registration Form Using HTML & CSS',
    link: 'https://www.youtube.com/embed/5vmyYPvW88k?si=e7qb8GwNLlrs2xZ7'
  },
  {
    id: '75OcvRXa330',
    title: 'How to make Logo using HTML & CSS | Instagram logo design using css',
    description: 'How to create Instagram Logo using HTML & CSS || How to make Instagram logo design',
    link: 'https://www.youtube.com/embed/75OcvRXa330?si=iRGpU4am4yoVa8lY'
  },
  {
    id: 'vZy2W4IIg2c',
    title: 'How to send mail from contact form using ReactJS',
    description: 'How to send mail from contact form using ReactJS',
    link: 'https://www.youtube.com/embed/vZy2W4IIg2c?si=rHCuVh9o0_L84HSb'
  },
  {
    id: 'Ewq3FnrLItI',
    title: 'How to create connection with Database in PHP mysql || PHP tutorials Part-1 || Connectivity in PHP',
    description: 'How to create connection with Database in PHP mysql || PHP tutorials Part-1 || Connectivity in PHP',
    link: 'https://www.youtube.com/embed/Ewq3FnrLItI?si=SoyQ8uZIX9Hns2z3'
  }
];
const YouTubeVideoCard = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!isPlaying) {
      // Open the video in a new tab on YouTube
      window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank');
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-black rounded-lg overflow-hidden shadow-lg relative">
      {/* Video Thumbnail Container */}
      <div className="relative w-full pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
        {/* Thumbnail Image */}
        <img
          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
          alt={video.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Play Button Overlay */}
        <button
          onClick={togglePlay}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-4 hover:bg-black/75"
        >
          <Play size={48} className="fill-white" />
        </button>
      </div>

      {/* Video Details */}
      <div className="p-4 bg-black text-white">
        <h3 className="text-lg font-bold mb-2">{video.title}</h3>
        <p className="text-sm text-gray-300 line-clamp-2">{video.description}</p>
      </div>
    </div>
  );
};

const YouTubeVideoPage = () => {
  return (
    <>
      <div className="w-full mt-20 p-4 max-w-8xl mb-6 mx-auto">
        <h3 className="text-3xl md:text-4xl text-center font-bold text-white mb-2">
          Youtube <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">Video's</span>
        </h3>
        <p className="text-gray-300 text-center text-lg lg:text-sm tracking-wide line-clamp-3 mb-6">subscribe & join in youtube channel</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-6">
          {videoData.map((video) => (
            <YouTubeVideoCard
              key={video.id}
              video={video}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default YouTubeVideoPage;