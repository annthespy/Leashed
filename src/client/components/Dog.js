import React, { useState } from "react";
import apiHelpers from "../../server/apiHelpers.js";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const Dog = ({ dog }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();

  const [url, setUrl] = useState("");
  const id = dog.id;

  const getPhoto = (id) => {
    apiHelpers
      .getPhotoById(id)
      .then(({ data }) => {
        //console.log("image", data[0].url);
        setUrl(data[0].url);
      })
      .catch((err) => {
        console.log("error getting dog photo", err);
      });
  };

  getPhoto(id);

  return (
    <tr>
      <td>
        {" "}
        <Avatar src={url} />
      </td>
      <td>{dog.name}</td>
      <td>{dog.breed_group}</td>
      <td>{dog.bred_for}</td>
      <td>{dog.breed_group}</td>
      <td>{dog.temperament}</td>
      <td>{dog.life_span}</td>
      <td>{dog.weight.imperial}</td>
    </tr>
  );
};

export default Dog;
