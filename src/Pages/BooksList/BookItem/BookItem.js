import React, { useState } from 'react';
import defaultBook from '../../../Assets/Images/book.png';
import Books from '../../../Services/Books';
import './BookItem.css';
import { toast } from 'react-toastify';

const BookItem = ({ book, user, atualizar }) => {

    const [reserving, setReserving] = useState(false);
    const [returning, setReturning] = useState(false);

    const verifyReserved = (status) => {
        if (!status || status == 'available') {
            return false;
        }
        return true;
    }

    const isWithMe = (userId) => {
        if (user.googleId == userId) {
            return true;
        }
        return false;
    }

    const reserve = () => {
        if (!reserving) {
            setReserving(true);
            Books.getById(book.id)
                .then(res => {
                    if (!verifyReserved(res.status)) {
                        const newBook = {
                            ...book,
                            status: 'reserved',
                            userId: user.googleId
                        }
                        Books.put(newBook, book.id).then(res => {
                            toast.success('Reserved Book!', { position: "bottom-right" });
                            setReturning(false);
                            atualizar();
                        });
                    } else {
                        toast.error('Looks like someone already booked that book!', { position: "bottom-right" });
                        setReturning(false);
                        atualizar();
                    }
                });
        } else {
            toast.error('You are already reserving this book!', { position: "bottom-right" });
        }
    }

    const giveBack = () => {
        if (!returning) {
            setReturning(true);
            const newBook = {
                ...book,
                status: 'available',
                userId: null
            }

            Books.put(newBook, book.id).then(res => {
                toast.success('Returned book!', { position: "bottom-right" });
                atualizar();
                setReturning(false);
            });
        } else {
            toast.error('You are already returning this book!', { position: "bottom-right" });
        }
    }

    return (
        <div className="row item-list text-center">
            <div className="col-sm-2 offset-sm-3">
                <img src={defaultBook} className="bookImage img-fluid" />
            </div>
            <div className="col-sm-4">
                <h4>
                    {book.name} - {book.author}
                </h4>
                <p>
                    {book.description}
                </p>
                {!verifyReserved(book.status) && <button className="btn btn-primary space-btn" onClick={reserve}>Reserve</button>}
                {isWithMe(book.userId) && <button className="btn btn-warning" onClick={giveBack}>Give back</button>}
            </div>
        </div>
    );
}

export default BookItem;
