import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTag,
	faMoneyBill1,
	faTruck,
	faExchange,
} from '@fortawesome/free-solid-svg-icons';

const BottomBanner = () => {
	return (
		<div className='container-fluid'>
			<div className="container text-center pt-5">
				<div className="row h5">
					<div className="col">
						<FontAwesomeIcon icon={faTag} />
						&nbsp;Ganhe 5% OFF
					</div>
					<div className="col">
						<FontAwesomeIcon icon={faMoneyBill1} />
						&nbsp;Parcelamento em até 10X sem juros
					</div>
					<div className="col">
						<FontAwesomeIcon icon={faTruck} />
						&nbsp;Entrega para todo o brasil
					</div>
					<div className="col">
						<FontAwesomeIcon icon={faExchange} />
						&nbsp;&nbsp;Primeira troca grátis
					</div>
				</div>
			</div>
		</div>
	);
};

export default BottomBanner;
