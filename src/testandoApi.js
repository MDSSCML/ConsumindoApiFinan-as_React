import React, { useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './modal'


const Consulta = () => {

    useEffect(() => {
        axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then(res => res.data)
            .then(data => {
                // código EUR
                document.getElementById("time").innerHTML = (` ${data.chartName}`);
                document.getElementById("code").innerHTML = (`Código: ${data.bpi.EUR.code}`);
                document.getElementById("description").innerHTML = (`Descrição: ${data.bpi.EUR.description}`);
                document.getElementById("rate").innerHTML = (`Avaliado: ${data.bpi.EUR.rate}`);
                document.getElementById("rate_float").innerHTML = (`Taxa Flutuante: ${data.bpi.EUR.rate_float}`);

                // código GBP
                document.getElementById("gbptime").innerHTML = (` ${data.chartName}`);
                document.getElementById("gbpcode").innerHTML = (`Código: ${data.bpi.GBP.code}`);
                document.getElementById("gbpdescription").innerHTML = (`Descrição: ${data.bpi.GBP.description}`);
                document.getElementById("gbprate").innerHTML = (`Avaliado: ${data.bpi.GBP.rate}`);
                document.getElementById("gbprate_float").innerHTML = (`Taxa Flutuante: ${data.bpi.GBP.rate_float}`);

                // código USD
                document.getElementById("usdtime").innerHTML = (` ${data.chartName}`);
                document.getElementById("usdcode").innerHTML = (`Código: ${data.bpi.USD.code}`);
                document.getElementById("usddescription").innerHTML = (`Descrição: ${data.bpi.USD.description}`);
                document.getElementById("usdrate").innerHTML = (`Avaliado: ${data.bpi.USD.rate}`);
                document.getElementById("usdrate_float").innerHTML = (`Taxa Flutuante: ${data.bpi.USD.rate_float}`);


                document.getElementById("nome").innerHTML = "Márcio Trovão";
            
            });
    })

    return (
        <React.Fragment>
            
                <Modal />
        </React.Fragment>
    );
}


export default Consulta