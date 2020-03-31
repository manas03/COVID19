import React from 'react';

const Country = ({ flag,id,country, cases,active,recovered,deaths,casesPerOneMillion}) => {
  return (
    <table className="table table-bordered table-hover" >
    
  
    
              <tbody >
               {/* {items.reverse().map(item => (*/}
                  <tr >
                    <td style={{width:'20px'}} key={id}>
                      <img
                        alt="flag"
                        src={flag}
                        style={{ width: "16px" }}
                      />
                    </td>
                    <th style={{width:"20%"}} key={id}>{country}</th>
                    <td style={{width:"15%"}} key={id}>{cases}</td>
                    <td style={{width:"15%"}} key={id}>{active}</td>
                    <td style={{width:"15%"}} key={id}>{recovered}</td>
                    <td style={{width:"15%"}} key={id}>{deaths}</td>
                    <td  style={{width:"15%"}} key={id}>{casesPerOneMillion}</td>
                  </tr>
               {/*} ))}*/}
              </tbody>
            </table>
  );
}

export default Country;