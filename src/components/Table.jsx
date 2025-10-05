

 const Table=({headings, data,label})=>{
    return (<>
     <style>
        {`
          table {
            width: 100%;
            border-collapse: collapse;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          th, td {
            padding: 12px 16px;
            border: 1px solid #ddd;
            text-align: left;
          }

          thead {
            background-color: #007bff;
            color: white;
          }

          tbody tr:hover {
            background-color: #f5f5f5;
            transition: background-color 0.2s ease-in-out;
          }

          table td:first-child, table th:first-child {
            padding-left: 20px;
          }

          table td:last-child, table th:last-child {
            padding-right: 20px;
          }
        `}
      </style>
     <table border="1" cellPadding="8" cellSpacing="0">

          <caption  style={{
      captionSide: 'top',      // place caption at the top
      fontSize: '1.2em',       // font size
      fontWeight: 'bold',      // bold text
      color: '#007BFF',        // text color
      marginBottom: '10px',    // spacing below caption
      textAlign: 'center',     // center alignment
    }}>{label}</caption>

    <thead>
        <tr>
         
     {headings.map((heading,index) => {
       return <th key={index}>{heading}</th>
    })}
        </tr>
      </thead>


    <tbody>
      {data.map((item,index) =>
      {
        const row=item.data;
        return(
          <tr key={index}>
              <td>{row["Flight Schedule ID:"]}</td>
              <td>{row["Carrier Name"]}</td>
              <td>{row["Source"]}</td>
              <td>{row["destination"]}</td>
              <td>{row["total Passengers"]}</td>
              <td>{row["time"]}</td>
              
          </tr>
        );
      })}
    </tbody>

    </table>
    </>);
}

export default Table;