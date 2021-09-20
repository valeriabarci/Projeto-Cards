import React from "react";
import './App.css';
import Cartao from "./layout/Cartao";
import Header from './components/Header/Header';
import Alemanha from './components/FundBasico/Alemanha';
import Amsterda from "./components/FundBasico/Amsterda";
import Campos from './components/FundBasico/CamposdoJordão';
import Europa from './components/FundBasico/Europa';
import Gramado from './components/FundBasico/Gramado';
import Maldivas from './components/FundBasico/Maldivas';
import Maragogi from './components/FundBasico/Maragogi';
import Paris from './components/FundBasico/Paris';
import SriLanka from './components/FundBasico/SriLanka';
import Sidney from './components/FundBasico/Sidney';
import VoosInternacionais from './components/FundBasico/VoosInternacionais';
import VoosNacionais from './components/FundBasico/VoosNacionais';
import AssentosVagos from './components/FundBasico/AssentosVagos';
const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="Cartoes">
                <Cartao titulo="Voo para Alemanha"
                    color = '#31A366'>
                    <Alemanha />
                    <VoosInternacionais min={7000}
                        max={9000}>
                    </VoosInternacionais>
                    <AssentosVagos min={1}
                        max={50}> </AssentosVagos>
                    
                </Cartao>

                <Cartao titulo="Voo para Amsterdã"
                    color = '#31A366'>
                    <Amsterda />
                    <VoosInternacionais min={7000}
                        max={9000}>
                    </VoosInternacionais>
                    <AssentosVagos min={1}
                        max={50}> </AssentosVagos>
                </Cartao>

                <Cartao titulo="Voo para Campos do Jordão"
                    color = '#403DFF'>
                    <Campos />
                    <VoosNacionais min={1000}
                        max={6000}>
                    </VoosNacionais>
                    <AssentosVagos min={1}
                        max={50}> </AssentosVagos>
                </Cartao>

                <Cartao titulo="Voo para Europa"
                    color = '#31A366'>
                    <Europa />
                    <VoosInternacionais min={7000}
                        max={9000}>
                    </VoosInternacionais>
                    <AssentosVagos min={1}
                        max={50}> </AssentosVagos>
                </Cartao>

                <Cartao titulo="Voo para Gramado"
                    color = '#403DFF'>
                    <Gramado />
                    <VoosNacionais min={1000}
                        max={6000}>
                    </VoosNacionais>
                    <AssentosVagos min={1}
                        max={50}> </AssentosVagos>
                </Cartao>

                <Cartao titulo="Voo para Maldivas"
                    color = '#E80270'>
                    <Maldivas />
                    <VoosInternacionais min={7000}
                        max={9000}>
                    </VoosInternacionais>
                    <AssentosVagos min={1}
                        max={50}> </AssentosVagos>
                </Cartao>

                <Cartao titulo="Voo para Maragogi"
                    color = '#403DFF'>
                    <Maragogi />
                    <VoosNacionais min={1000}
                        max={6000}>
                    </VoosNacionais>
                    <AssentosVagos min={1}
                        max={50}> </AssentosVagos>
                </Cartao>

                <Cartao titulo="Voo para Paris"
                    color = '#31A366'>
                    <Paris />
                    <VoosInternacionais min={7000}
                        max={9000}>
                    </VoosInternacionais>
                    <AssentosVagos min={1}
                        max={50}> </AssentosVagos>
                </Cartao>

                <Cartao titulo="Voo para Sri Lanka"
                    color = '#E80270'>
                    <SriLanka />
                    <VoosInternacionais min={7000}
                        max={9000}>
                    </VoosInternacionais>
                    <AssentosVagos min={1}
                        max={50}> </AssentosVagos>
                </Cartao>

                <Cartao titulo="Voo para Sidney"
                    color = '#FF8B05'>
                    <Sidney />
                    <VoosInternacionais min={7000}
                        max={9000}>
                    </VoosInternacionais>
                    <AssentosVagos min={1}
                        max={50}> </AssentosVagos>
                </Cartao>
            </div>
        </div>
    )
}

export default App