import style from './feesTable.module.css';

function FeesTable(){
    return(
        <table className={style.table}>
            <thead>
                <tr>
                    <th>Course Style</th>
                    <th>4-class Package</th>
                    <th>6-class Package</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Individual Online</td>
                    <td>4000</td>
                    <td>5700</td>
                </tr>
                <tr>
                    <td>Individual offline</td>
                    <td>5000</td>
                    <td>6300</td>
                </tr>
                <tr>
                    <td>Combined online</td>
                    <td>3500</td>
                    <td>4200</td>
                </tr>
                <tr>
                    <td>Combined online</td>
                    <td>5000</td>
                    <td>6300</td>
                </tr>
            </tbody>
        </table>
    );
}

export default FeesTable;