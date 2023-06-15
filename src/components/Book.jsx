import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/bookSlice';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({
  id, title, author, category,
}) => {
  const [percentage, setPercentage] = useState(0);
  const [Chapter, setChapter] = useState(0);
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  const handleProgressBarClick = () => {
    if (percentage < 100) {
      setPercentage(percentage + 1);
    }
  };

  const handleChapterClick = () => {
    if (Chapter < 50) {
      setChapter(Chapter + 1);
    }
  };

  return (
    <div className="flex justify-between bg-white h-40 p-5 shadow-xl">
      <div>
        <p className="h-4 text-sm font-bold opacity-1 text-slate-400 mb-1 capitalize">{category}</p>
        <p className="h-7 text-2xl font-bold capitalize">{title}</p>
        <p className="h-7 text-sm font-medium capitalize text-cyan-600">{author}</p>
        <div className="flex gap-4">
          <button className=" text-cyan-600" type="button">Comments</button>
          <hr className="w-0.5 h-5 bg-slate-400" />
          <button className=" text-cyan-600" type="button" onClick={handleRemoveBook}>Remove</button>
          <hr className="w-0.5 h-5 bg-slate-400" />
          <button className="text-cyan-600" type="button">Edit</button>
        </div>
      </div>
      <div className="flex gap-10 items-center self-end">
        <div className="flex gap-3 ">
          <button className="block" type="button" style={{ width: '100px' }} onClick={handleProgressBarClick}>
            <CircularProgressbar
              value={percentage}
              strokeWidth={10}
              styles={buildStyles({
                pathColor: '#3e98c7',
                trailColor: '#d6d6d6',
                backgroundColor: '#f88',
              })}
            />
          </button>
          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl">{`${percentage}%`}</p>
            <p className="text-xl font-bold text-slate-400">Completed</p>
          </div>
        </div>
        <hr className="w-0.5 h-28 bg-slate-400" />
        <div className="flex flex-col">
          <p className="text-md font-bold text-slate-400">CURRENT CHAPTER</p>
          <p className="text-xl opacity-[0.7] pt-1 pb-1">
            Chapter
            {' '}
            { Chapter }
          </p>
          <button className="bg-blue-400 text-white text-sm rounded-md h-12 w-48" type="button" onClick={handleChapterClick}>UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
