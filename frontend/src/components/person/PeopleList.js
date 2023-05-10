import React from 'react';

const PeopleList = (props) => {
    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header"><h4>People</h4></li>
                {props.people.map((item) => (
                    <a href="#!" className="collection-item" key={item._id}
                        onClick={props.updateCurrentPerson.bind(this, item)}>{item.firstName}
                        {item.lastName}</a>

                ))}
            </ul>
        </div>);
}

export default PeopleList;