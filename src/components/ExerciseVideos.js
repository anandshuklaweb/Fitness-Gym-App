import React from "react";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <>
      <section id="exercise-videos">
        <h2>
          Watch <span>{name}</span> exercise videos
        </h2>
        <div className="row">
          {exerciseVideos?.slice(0, 6)?.map((item, index) => (
            <div className="col-md-4">
              <div className="exercise-card">
                <a
                  key={index}
                  className="exercise-video"
                  href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div class="card text-center">
                    <div class="card-body">
                      <img
                        src={item.video.thumbnails[0].url}
                        alt={item.video.title}
                      />
                    </div>
                    <div class="card-footer text-muted">
                      <a href="#" class="btn btn-info">
                        {item.video.title}
                      </a>
                      <a href="#" class="btn btn-danger">
                        {item.video.channelName}
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <Box sx={{ marginTop: { lg: "203px", xs: "20px" } }} p="20px">
        <Stack
          sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}
          justifyContent="flex-start"
          flexWrap="wrap"
          alignItems="center"
        >
          {exerciseVideos?.slice(0, 3)?.map((item, index) => (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ borderTopLeftRadius: "20px" }}
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
              />
              <Box>
                <Typography
                  sx={{ fontSize: { lg: "28px", xs: "18px" } }}
                  fontWeight={600}
                  color="#000"
                >
                  {item.video.title}
                </Typography>
                <Typography fontSize="14px" color="#000">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          ))}
        </Stack>
      </Box> */}
    </>
  );
};

export default ExerciseVideos;
