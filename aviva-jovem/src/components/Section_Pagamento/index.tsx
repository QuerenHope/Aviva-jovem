import React, { useEffect, useState } from 'react'
import { TagSection } from './style'
import { useForm } from "react-hook-form";
import axios from 'axios'

export interface IRegisterForm {
  username: string;
  email: string;
  dtnasc: string;
  cpf: string;
  fone:string;
  cidade:string;
  uf:string;
  pastor:string;
  dataDeChegada:string;
}



const SectionPay = () => {


  const {register, handleSubmit} = useForm<IRegisterForm>();

  const [userdata, setuserdata] = useState([])

  const onRegister = async (data: IRegisterForm) =>  {

      axios({
        method: 'post',
        url: 'https://v1.nocodeapi.com/querenhope/google_sheets/WtCfskLDjUDEAwxX?tabId', 
        params: {},
        data: [[data.username, data.cpf, data.cidade,data.uf , data.dtnasc, data.fone, data.pastor]]
    }).then(function (response) {
            // handle success
            console.log(response.data);
    }).catch(function (error) {
            // handle error
            console.log(error);
    })
  }
  

  return (
    <div style={{display:'flex',flexDirection:'column', alignItems:'center', background: 'var(--color-roxo)' }}>
      <h2 style={{ padding:'1rem', alignItems:'center'}}>Inscrição</h2>
    
    <TagSection id='pagamento'>
      <div className='form'>
        <form onSubmit={handleSubmit(onRegister)}>
          <div className='formulario'>

          <label htmlFor="">Nome Completo
          <input type="text" {...register("username")} />
          </label>

          <label htmlFor="">Data de nascimento
            <input type='text' id='dtnasc' {...register("dtnasc")}/>
          </label>

          <label htmlFor="">CPF
            <input type="text"{...register("cpf")} />
          </label>

          <label htmlFor="">Telefone
            <input type="tel" id="fone" required pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" placeholder="11 99999-9999" {...register("fone")}/>
          </label>
          <div className="cidade">
            <label htmlFor="">Cidade
              <input type="text" {...register("cidade")}/>
            </label>
            <label htmlFor="">UF
            <input type="text" {...register("uf")} />
            </label>
          </div>
            <label htmlFor="">Pastor
              <input type="text" {...register("pastor")} />
            </label>

          </div>
          <button type='submit'>Enviar</button>
        </form>
      </div>
      <div className='pay'>
      <form action="">
          <div className='formulario'>

          <label htmlFor="">Nome Completo
          <input type="text" />
          </label>

          <label htmlFor="">Data de nascimento
            <input type='date' id='dtnasc' name='dtnasc'/>
          </label>

          <label htmlFor="">CPF
            <input type="text" />
          </label>

          <label htmlFor="">Telefone
            <input type="tel" id="fone" name="fone" required pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" placeholder="11 99999-9999"/>
          </label>
          <div className="cidade">
            <label htmlFor="">Cidade
              <input type="text" />
            </label>
            <label htmlFor="">UF
            <input type="text" />
            </label>
          </div>
            <label htmlFor="">Pastor
              <input type="text" />
            </label>

            <label htmlFor="">Data prevista de Chegada
              <input type="time" id="hora-desejada" name="hora-desejada" required />
            </label>
          </div>
          <button>Enviar</button>
        </form>
      </div>
    </TagSection>
    </div>
  )
}

export default SectionPay