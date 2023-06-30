import React, { useState } from "react";
import axios from "axios";
import "./SearchBar.css";
import Card from "./Card.js";

const SearchBar = ({ darkMode }) => {
  const [inputValue, setInputValue] = useState("");
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents form submission and page reload
    setLoading(true);
    try {
      const response = await axios.get(
        "https://lnpdwysick.execute-api.us-east-1.amazonaws.com/getcourses",
        {
          params: {
            query: inputValue,
          },
        }
      );
      console.log(response.data);
      setClasses(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className="intro">
        <h1>Welcome</h1>
        <p>
          Make a quick search! <i>"Are there any courses about farming"</i> or{" "}
          <i>"Gimme a few courses about avacados"</i>...
        </p>
        <p>
          Search anything up to get relavent courses offered at the Univeristy
          of Connecticut
        </p>
      </div>
      <div className="search-content">
        <div>
          <form class="form" onSubmit={handleSubmit}>
            <label for="search">
              <input
                required=""
                autocomplete="off"
                id="search"
                type="text"
                name="text"
                className="input"
                placeholder="Search here now ..."
                value={inputValue}
                onChange={handleChange}
              />
              <div class="icon" onClick={handleSubmit}>
                <svg
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="swap-on"
                >
                  <path
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
                <svg
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="swap-off"
                >
                  <path
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </div>
              <button
                type="reset"
                class="close-btn"
                onClick={() => {
                  setInputValue("");
                }}
              >
                <svg
                  viewBox="0 0 20 20"
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </label>
          </form>
          <div className="similar-classes">
            {loading ? (
              <div className="ldr">
                <div class="loader"></div>
              </div>
            ) : (
              classes.map((classItem, index) => (
                <Card
                  key={index}
                  title={classItem["title"]}
                  score={classItem["score"]}
                  course_description={classItem["course_description"]}
                  course_title={classItem["course_title"]}
                  grading_basis={classItem["grading_basis"]}
                  num_credits={classItem["num_credits"]}
                  prerequisites={classItem["prerequisites"]}
                  colors={classItem["col"]}
                  mode={darkMode}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
