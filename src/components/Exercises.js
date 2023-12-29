import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <>
      <section id="exercise">
        <div className="mb-16">
          <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
            <div className="flex gap-12 flex-wrap justify-center">
              {currentExercises.map((exercise, idx) => (
                <ExerciseCard key={idx} exercise={exercise} />
              ))}
            </div>
            <Stack sx={{ mt: { lg: "40px", xs: "70px" } }} alignItems="center">
              {exercises.length > 9 && (
                <Pagination
                  color="standard"
                  shape="rounded"
                  defaultPage={1}
                  count={Math.ceil(exercises.length / exercisesPerPage)}
                  page={currentPage}
                  onChange={paginate}
                  size="large"
                />
              )}
            </Stack>
          </Box>
        </div>
      </section>
    </>
  );
};

export default Exercises;
