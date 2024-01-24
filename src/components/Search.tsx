import { Divider, Input } from 'antd';
import { useAppContext } from '../context/globalState';

function Search() {
    const { dispatch } = useAppContext();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        console.log(query)
        dispatch({ type: 'SEARCH_FOOD', payload: query });
    };

    return (
        <>
            <Divider>Search</Divider>
            <label>Search Food</label>
            <Input placeholder="Searh for food" type='text' onChange={(e) => handleSearch(e)} />
        </>
    );
}

export default Search;