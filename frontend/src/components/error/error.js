import { H2 } from '../h2/h2';
import { PROP_TYPE } from '../../constants';
import styled from 'styled-components';

const Div = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-size: 18px;
`;

export const Error = ({ error }) =>
	error && (
		<Div>
			<H2>Ошибка</H2>
			<div>{error}</div>
		</Div>
	);

Error.propTypes = {
	error: PROP_TYPE.ERROR,
};
