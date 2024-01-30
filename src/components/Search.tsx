import { Input } from 'antd';
import { useAppContext } from '../context/globalState';
// use foodData to 'type' the data store in local state and send that data as the payload to context
function Search() {
    const { dispatch } = useAppContext();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        console.log(query)
        dispatch({ type: 'SEARCH_FOOD', payload: query });
    };

    return (
        <>
            <label>Search Food</label>
            <Input placeholder="Searh for food" type='text' onChange={(e) => handleSearch(e)} />
        </>
    );
}

export default Search;