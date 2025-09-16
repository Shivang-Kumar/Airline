import React,{useState} from "react";
import Select from '../components/Select';
import Input from '../components/Input';
import Button from '../components/Button';

const Search=({onSearch})=>{

    const [from , setFrom]=useState("");
    const [to,setTo]=useState("");
    const [date,setDate]=useState("");


    const locations=["Dehli","Bangalore","Mumbai","Kolkata","Chennai","Locations"];


    const handleSubmit=(e)=>{
        e.preventDefault();
        onSearch({from,to,date});
    }

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow space-y-4 w-full max-w-md mx-auto">

        <Select label="From"
        options={locations}
        value={from}
        onChange={(e)=> setFrom(e.target.value)}
        />

        <Select
        label="To"
        options={locations}
        value={to}
        onChange={(e)=> setTo(e.target.value)}
        />

        <Input label="Date"
        type="date"
        value={date}
        onChange={(e)=>setDate(e.target.value)}
        placeholder="Please choose a date of travel"
        />


        <Button type="submit" >Search</Button>
        </form>
    );
}

export default Search;