import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import {Button, Form} from 'react-bootstrap';
import { Route } from "react-router-dom";
import {Post} from "./Post";

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [saveDate, setSaveDate] = useState(new Date());
    const [needNewPage, setNeedNewPage] = useState(false);

    const {addTransaction} = useContext(GlobalContext);


    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Date.now(),
            text,
            amount: +amount,
            date: saveDate
        }
        addTransaction(newTransaction);
        setNeedNewPage(true);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <Form onSubmit={onSubmit}>
                <Form.Group className="form-control" controlId="formBasicEmail">
                    <Form.Label>Name of the spend</Form.Label>
                    <Form.Control type="text" placeholder="Name" value={text}
                                  onChange={(e) => setText(e.target.value)}/>
                </Form.Group>

                <Form.Group className="form-control" controlId="formBasicCheckbox">
                    <br/>
                    <Form.Label>Amount
                        <br/>
                        (negative - expense, positive - income)
                    </Form.Label>
                    <Form.Check type="number" label="value" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </Form.Group>

                <Form.Group className="form-control" controlId="dob">
                    <Form.Label>Select Date</Form.Label>
                    <br/>
                    <Form.Control type="date" name="dob" placeholder="Date of Birth" onChange={(e) => setSaveDate(e.target.value)} />
                </Form.Group>
                <Button type="submit" className="btn">Add transaction</Button>
            </Form>
            {needNewPage ?
                <Route path="transactions/:id" component={Post}></Route> & setNeedNewPage(false)
                : <></>
            }
        </>
    )
}
