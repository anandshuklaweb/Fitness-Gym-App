import React from "react";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <>
      <section className="pb-20">
        <h2 className="text-center pb-8 md:pb-12 text-3xl md:text-5xl font-semibold">
          Watch <span>{name}</span> exercise videos
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {exerciseVideos?.slice(0, 6)?.map((item) => (
            
            <div className="max-w-96 w-96 shadow-sm" key={item.video.videoId}>
              <div className="">
                <a
                  href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{"textDecoration": "none"}}
                >
                  <div>
                    <div>
                      <img
                        src={item.video.thumbnails[0].url}
                        alt={item.video.title}
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-center py-2 px-4 max-h-16">
                      <p className="bg-teal-400 px-4 py-2 rounded-sm text-sm">
                        {(item.video.title).substring(0,36)}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ExerciseVideos;
