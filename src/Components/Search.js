import React, { useState, useEffect } from 'react';
import ImageResults from "./ImageResults"
import { searchRequest } from '../apiRequests';

function Search(props) {
	const [images, setImages] = useState([]);

	const searchHobbies = async () => {
		const { hobbies } = props;

		if (hobbies.length === 0) {
			setImages([]);
			return;
		}

		const hobbyList = hobbies.split(', ');

		const requests = hobbyList.map(hobby => {
			return new Promise((resolve, reject) => resolve(searchRequest(hobby)));
		})

		const response = await Promise.all(requests);
		const images = response.flatMap(res => res.slice(0, 5));

		setImages(images)
	};

	useEffect(() => {
		searchHobbies();
	}, []);

	// useEffect((prevProps) => {
	// 	if (prevProps.hobbies !== props.hobbies) {
	// 		searchHobbies();
	// 	}
	// });
	
	return (
		<div>
			{console.log(images)}
			{images.length > 0 ? (<ImageResults images={images} />) : null}
		</div>
	);
}

export default Search;