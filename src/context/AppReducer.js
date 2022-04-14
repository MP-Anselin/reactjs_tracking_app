export default (state, action) => {

    function add(newTransaction) {
        let data = JSON.parse(localStorage.getItem('transactionData'));
        let merged = [newTransaction];
        if (data)
            merged = [...data, ...merged];
        localStorage.setItem('transactionData', JSON.stringify(merged));
    }

    function remove(oldTransactionId) {
        let data = JSON.parse(localStorage.getItem('transactionData'));
        if (data) {
            const merged = data.filter(transaction => transaction.id !== oldTransactionId);
            localStorage.setItem('transactionData', JSON.stringify(merged));
        }
    }

    function get() {
        let data = JSON.parse(localStorage.getItem('transactionData'));
        return data || [];
    }


    switch (action.type) {
        case 'DELETE_TRANSACTION':
            remove(action.payload)
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload),
            }
        case 'ADD_TRANSACTION':
            add(action.payload)
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return get();
    }
}