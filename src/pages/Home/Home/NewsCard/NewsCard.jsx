import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaBookmark, FaRegStar, FaStar } from 'react-icons/fa';
import { HiOutlineShare } from 'react-icons/hi';
import { AiFillStar, AiFillEye } from 'react-icons/ai';
import moment from "moment/moment";
import Rating from "react-rating";


const NewsCard = ({ news }) => {
    //   console.log(news);
    const { _id, author, title, image_url, details, total_view ,rating} = news;
    return (
        <div>
            <Card className="mb-5">
                <Card.Header className="d-flex justify-content-between align-items-center text-muted">
                    <div className="d-flex">
                        <Image
                            src={author.img}
                            className="me-3"
                            style={{ height: '60px' }}
                            roundedCircle></Image>
                        <div>
                            <span>{author?.name}</span>
                            <p>Date:{moment(author?.published_date).format('yyy-MM-DD')}</p>
                        </div>
                    </div>
                    <div>
                        <FaBookmark className='me-2'></FaBookmark>
                        <HiOutlineShare></HiOutlineShare>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length > 250 ? (
                            <span>
                                {details.slice(0, 250) + "..."}{" "}
                                <Link to={`/news/${_id}`}>Read more</Link>
                            </span>
                        ) : (
                            <span>{details}</span>
                        )}
                    </Card.Text>
                    <Button variant="info">Details</Button>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center text-muted">
                    <div>
                        <Rating
                            placeholderRating={rating.number}
                            readonly
                            emptySymbol={<FaRegStar className="text-warning"></FaRegStar>}
                            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                         <span className="mx-2">{rating.number}</span>
                    </div>
                    <div>
                        <AiFillEye className="text-muted me-2"></AiFillEye>
                        <span>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;
