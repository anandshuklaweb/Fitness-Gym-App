import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <>
      <section className="py-4">
        <div className="text-center py-2 md:py-4">
          <h2 className="px-2 font-semibold text-2xl md:text-6xl">
            Awesome Exercises You <br /> Should Know
          </h2>
        </div>

        <div className="text-center">
            <div className=" py-4">
              <input
                type="text"
                className="outline-none p-2 rounded-l-md border w-3/6 min-h-12"
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                placeholder="Search Exercises"
              />
              <button
                type="submit"
                className="bg-teal-500 text-white min-h-12 px-4 rounded-r-md"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
        </div>
      </section>

      <div className="container-fluid body-parts-scroll">
        <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
          <HorizontalScrollbar
            data={bodyParts}
            bodyParts
            setBodyPart={setBodyPart}
            bodyPart={bodyPart}
          />
        </Box>
      </div>
    </>
  );
};

export default SearchExercises;
