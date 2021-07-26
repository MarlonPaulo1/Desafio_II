import { useState } from 'react'

function ContactForm() {
    // form localstorage

    let [nome, setnome] = useState()
    let [sobrenome, setSobrenome] = useState()
    let [idade, setIdade] = useState()
    let [cidade, setCidade] = useState()
    let [estado, setEstado] = useState()
    let [bairro, setBairro] = useState()
    let [rua, setRua] = useState()
    let [email, setEmail] = useState()
    let [telefone, setTelefone] = useState()

    let data = {
        nome,
        sobrenome,
        idade,
        cidade,
        estado,
        bairro,
        rua,
        email,
        telefone
    }

    let converterData = JSON.stringify(data)

    const armazenar=(chave,valor) => {
        localStorage.setItem(chave,valor)
    }
    return (
        <form>
            <div className="form-item">
                <label>Nome:</label>
                <input
                    type="text" 
                    placeholder="Digite seu Nome."
                    value={nome}
                    onChange={(e) => setnome(e.target.value)} 
                />    
            </div>
            <div className="form-item">
                <label>Sobrenome:</label>
                <input
                    type="text" 
                    placeholder="Digite seu Sobrenome."
                    value={sobrenome}
                    onChange={(e) => setSobrenome(e.target.value)} 
                />    
            </div>
            <div className="form-item">
                <label>Idade:</label>
                <input 
                    type="number" 
                    placeholder="Digite sua Idade."
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)} 
                />    
            </div>
            <div className="form-item">
                <label>Cidade:</label>
                <input 
                    type="text" 
                    placeholder="Digite sua Cidade."
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)} 
                />    
            </div>
            <div className="form-item">
                <label>Estado:</label>
                <input 
                    type="text" 
                    placeholder="Digite seu Estado."
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)} 
                />    
            </div>
            <div className="form-item">
                <label>Bairro:</label>
                <input 
                    type="text" 
                    placeholder="Digite seu Estado."
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)} 
                />    
            </div>
            <div className="form-item">
                <label>Rua:</label>
                <input 
                    type="text" 
                    placeholder="Digite seu Rua."
                    value={rua}
                    onChange={(e) => setRua(e.target.value)} 
                />    
            </div>
            <div className="form-item">
                <label>Email:</label>
                <input 
                    type="email" 
                    placeholder="Digite seu Bairro."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            <div className="form-item">
                <label>Telefone:</label>
                <input 
                    type="tel" 
                    placeholder="Digite seu Telefone." 
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                />    
            </div>
            <button 
                onClick={() => armazenar('ls_data', converterData)}
            >
                Cadastrar
            </button>            
        </form>
    )
}

export default ContactForm