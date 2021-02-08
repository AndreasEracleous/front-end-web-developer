import React from 'react';
import PropTypes from 'prop-types';

const wrapPageElement = ({ heroHeader, children }) => (
	<>
		{heroHeader}
		{children}
	</>
);

wrapPageElement.propTypes = {
	element: PropTypes.node.isRequired,
	props: PropTypes.node.isRequired,
};
export default wrapPageElement;
