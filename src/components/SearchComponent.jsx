import React,{useState} from "react";
import Select from './Select';
import Input from './Input';
import Button from './Button';

const Search=({onSearch , origin , destination , dateOfTravel  })=>{

    const [from , setFrom]=useState(origin || "");
    const [to,setTo]=useState(destination || "");
    const [date,setDate]=useState(dateOfTravel || "");


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