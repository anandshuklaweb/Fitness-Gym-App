import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => (
  <>
    <div className="max-w-96 w-96 shadow-sm">
      <Link className="text-gray-600 hover:text-gray-600" to={`/exercise/${exercise.id}`} style={{"textDecoration": "none"}}>
        <div className="text-center">
          <div className="bg-gray-100 py-3 px-4 text-lg font-semibold capitalize border-t-4 border-teal-400">`{(exercise.name).length > 25 ? (exercise.name).substring(0, 25) : (exercise.name)}`  </div>
          <div>
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" className="w-full" />
          </div>
          <div className="bg-gray-100 py-2 px-4 flex justify-between">
            <p className="bg-teal-400 px-4 py-2 rounded-sm" style={{"textDecoration": "none"}}>
              {exercise.bodyPart}
            </p>
            <p className="bg-orange-400 px-4 py-2 rounded-sm" style={{"textDecoration": "none"}}>
              {exercise.target}
            </p>
          </div>
        </div>
      </Link>
    </div>
  </>
);

export default ExerciseCard;
