import React, { useState } from 'react';
import { GeoJSON, Popup } from 'react-leaflet';

const GeoLayer = ({ id, data, name, address, activity, phone, mail }) => {
    const [flag, setFlag] = useState(false);
    const classList = ["displayNone"];

    if (flag) {
        classList.push("displayOn");
    }
    return (
        <GeoJSON key={id}
            data={data}
            onClick={() => setFlag(!flag)}>
            <table className={classList.join(" ")}>
                <button className="btn -close"
                        onClick={() => setFlag(!flag)}
                        type="button">X</button>                        
                <tbody>
                    <tr>
                        <th>Название объекта</th>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <th>Вид деятельности</th>
                        <td>{activity}</td>
                    </tr>
                    <tr>
                        <th>Адрес</th>
                        <td>{address}</td>
                    </tr>
                    <tr>
                        <th>Телефон</th>
                        <td>{phone}</td>
                    </tr>
                    <tr>
                        <th>E-mail</th>
                        <td>{mail}</td>
                    </tr>
                </tbody>
            </table>
            <Popup>{name}<br />{address}</Popup>
        </GeoJSON>
    );
}

export default GeoLayer;