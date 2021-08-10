import React from 'react';
import '../Design/App.css'

function LatestData(props) {

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    return (
        <div class="newsbox">
            {props.items.articles && props.items.articles.map(item => <a key={item.content} class="newsLink" href={item.url}>{item.title}<p>{formatDate(item.publishedAt)}</p></a>) }
        </div>
    )
}

export default LatestData