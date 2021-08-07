import React from 'react';
import '../Design/App.css'

function Data(props) {

    return (
        <div class="newsbox">
            {props.items.articles && props.items.articles.map(item => <div class="news" key={item.content}><p class="newsTitle">{item.title}</p><a class="newsLink" href={item.url}>Link</a></div>) }
        </div>
    )
}

export default Data