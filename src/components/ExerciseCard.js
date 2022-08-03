import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => (
  <>
    <div className="row">
      <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <div class="card text-center">
          <div class="card-header">{exercise.name}</div>
          <div class="card-body">
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
          </div>
          <div class="card-footer text-muted">
            <a href="#" class="btn btn-info">
              {exercise.bodyPart}
            </a>
            <a href="#" class="btn btn-danger">
              {exercise.target}
            </a>
          </div>
        </div>
      </Link>
    </div>
  </>
);

export default ExerciseCard;
