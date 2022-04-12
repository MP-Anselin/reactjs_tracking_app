import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import {Button, Form} from 'react-bootstrap';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <Form onSubmit={onSubmit}>
                <Form.Group className="form-control" controlId="formBasicEmail">
                    <Form.Label>Name of the spend</Form.Label>
                    <Form.Control type="text" placeholder="Name" value={text} onChange={(e) => setText(e.target.value)}/>
                </Form.Group>

                <Form.Group className="form-control" controlId="formBasicCheckbox">
                    <br/>
                    <Form.Label>Amount
                        <br/>
                        (negative - expense, positive - income)
                    </Form.Label>
                    <Form.Check type="number" label="value" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </Form.Group>
                <Button type="submit" className="btn" >Add transaction</Button>
            </Form>
        </>
    )
}
