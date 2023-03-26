import { useEffect, useState } from 'react';
import PackagesMap from './PackagesMap';

export default function ReadyPackages (){
    const [packagesArr, setpackagesArr] = useState([])
    const sendReq = async () => {
        const serverURL = `${process.env.REACT_APP_serverURL}readyPackegess`;
        const res = await fetch(serverURL);
        const Data = await res.json();
        setpackagesArr(Data)
    }
    useEffect(() => {

        sendReq();
    }, [setpackagesArr])

    return (
        <div style={{ backgroundColor: '#4e3c3c' }}>

            
            <PackagesMap  fetchRes={packagesArr} />
        </div>
    )
}