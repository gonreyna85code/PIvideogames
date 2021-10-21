import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGenres, postVideogame } from "../redux/actions.js";
import icon from "../styles/home-create.png";
import "../styles/create.css";
import image from "../styles/landing.jpg"

export default function Create() {
  const dispatch = useDispatch();
  const [Videogame, setVideogame] = useState({
    database_created: 'true',
    platforms: [],
    genres: [],
    background_image: image,
  });
  const platforms = [
    "Xbox360",
    "PC",
    "Android",
    "Windows",
    "Linux",
    "Mac",
    "PlayStation",
  ];
  const genres = useSelector((state) => state.Genres);
  function submit(e) {
    e.preventDefault();
    setVideogame({
      ...Videogame,
      database_created: true,
    });
    console.log(Videogame);
    dispatch(postVideogame(Videogame));
    alert("Videogame created successfully");
  }
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);
  return (
    <div className="create">
      <div>
        <a href="/home" className="icon">
          <div>
            <img src={icon} width='60px' height='60px' alt="" className="img" />
          </div>
        </a>
      </div>
      <h1 className="create_title">Create New Videogame</h1>
      <form id="form" className="create_container" onSubmit={submit}>
        <div className="text_box">
          <div className="field">
            <label>Name:&nbsp;</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) =>
                setVideogame({
                  ...Videogame,
                  name:
                    e.target.value.charAt(0).toUpperCase() +
                    e.target.value.substring(1),
                })
              }
            />
          </div>
        </div>
        <div>
        <label>Genres:&nbsp;</label>
          <select
            id="genres"
            multiple
            size="6"
            onChange={(e) =>
              setVideogame({
                ...Videogame,
                genres: [...Videogame.genres, { name: e.target.value }],
              })
            }
          >
            {genres.map((e) => (
              <option key={e.id} value={e.name}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
        <div>
        <label>Platforms:&nbsp;</label>
          <select
            id="platforms"
            multiple
            size="6"
            onChange={(e) =>
              setVideogame({
                ...Videogame,
                platforms: [...Videogame.platforms, { name: e.target.value }],
              })
            }
          >
            {platforms.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
        <div>
        <label>Release data:&nbsp;</label>
          <input
            type="date"
            onChange={(e) =>
              setVideogame({ ...Videogame, released: e.target.value })
            }
          />
        </div>
        <div>
        <label>Rating:&nbsp;</label>
          <input
            type="number"
            min="1"
            max="5"
            id="rating"
            placeholder="Rating"
            onChange={(e) =>
              setVideogame({ ...Videogame, rating: parseInt(e.target.value) })
            }
          />
        </div>
        <div>
        <label>Description:&nbsp;</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            onChange={(e) =>
              setVideogame({ ...Videogame, description_raw: e.target.value })
            }
          ></textarea>
        </div>
        <div>
          <input type="submit" value="Create" className="create_button" />
        </div>
      </form>
    </div>
  );
}
