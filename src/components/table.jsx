import React from 'react';

const TableData = ( {name, activity, address, phone, mail, flag} ) => {
    const classList = ["displayOn"];
    const flagState = flag;
    console.log(`flag state: ${flagState}`);

    /* if (flag) {
        classList.push("displayOn");
    } */
    
    return (
        <table className={classList.join(" ")}>
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
    );
}

export default TableData;