import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCashAction, getCashAction} from "./store/cashReduser";
import {addCustomerAction, removeCustomersAction} from "./store/customerReduser";
import {fetchCustomers} from "./asyncAction/customers";

function App() {

	const dispatch = useDispatch()
	const cash = useSelector(state => state.cash.cash)
	const customers = useSelector(state => state.customers.customers)

	const addCash = (cash) => dispatch(addCashAction(cash))
	const getCash = (cash) => dispatch(getCashAction(cash))

	const addCustomer = (name) => {
		const customer = {
			name,
			id: Date.now()
		}
		dispatch(addCustomerAction(customer))
	}

	const removeCustomer = (customer) => dispatch(removeCustomersAction(customer.id))


	return (
		<div className='app'>
			<div className='balance'>
				<div>Баланс:</div>
				<div className='cash'>{cash}</div>
			</div>

			<div className='container'>
				<button className="button" onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
				<button className="button" onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
				<button className="button" onClick={() => addCustomer(prompt())}>Добавить клиента</button>
				<button className="button" onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>
			</div>

			{
				customers.length > 0 ?
					<ul className='list'>
						{customers.map(customer => (
							<li
								key={customer.id}
								className='list_customer'
								onClick={() => removeCustomer(customer)}
							>
								{customer.name}
							</li>
						))}
					</ul>
					:
					<div className='customers-none'>Клиенты отсутствуют</div>
			}
		</div>
	);
}

export default App;
