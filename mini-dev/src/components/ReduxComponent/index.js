import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDemoJson, fetchDemoJsonThunk, test } from '../../store/actions/demoJsonActionCreators';
import axios from "axios";

const ReduxComponent = () => {
    const dispatch = useDispatch();
    const demoJson = useSelector((state) => state.demoJson);

    const [value, setValue] = useState(0);

    // useEffect(() => {
    //     dispatch(fetchDemoJson({ test: "Hello!" }));
    // }, []);

    const handleButtonClick = async () => {
        const result = await axios({
            method: 'GET',
            url: 'https://thatcopy.pw/catapi/rest/'
        });

        console.log(result.data);


        dispatch(fetchDemoJson(result.data));
        setValue(value + 1);
    }

    return (
        <div>
            <div>{demoJson.url}</div>
            <button
                type="button"
                onClick={handleButtonClick}>
                Click for a cat! Cat count: {value}.
            </button>
            <img 
                class="CatImage"
                src={demoJson.data?.url} 
                alt={''}></img
                >
        </div>
    )
}

export default ReduxComponent;