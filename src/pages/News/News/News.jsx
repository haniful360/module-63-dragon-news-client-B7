import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaArrowLeft } from "react-icons/fa";

const News = () => {
  const news = useLoaderData();
  const { title, image_url, details, category_id } = news;
  // console.log(news);

  return (
    <Card className="shadow">
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button className="text-white" variant="info">
            <FaArrowLeft></FaArrowLeft>
            All news in this category</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
