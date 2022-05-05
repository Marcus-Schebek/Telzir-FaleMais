import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink
} from '../components/NavBar';
import { InpRadio } from '../components/InputRadio'
import logoWhiteImg from '../assets/images/telzir-white.png'
import { InputSection, SimulatorSection } from '../components/SimulatorSection';
import { MainApp } from '../styles/AppPage-styles';
import { logout, supabase } from '../services/supabaseClient'
import { ProfileImg } from '../components/Profile';
import { SubmitButton } from '../components/Buttons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




export function AppPage() {
  const User = supabase.auth.user()
  const session = supabase.auth.session()
  const navigate = useNavigate()

  function verifySession(){
    if(!session){
      navigate('/')
    }
  }
  const user = {
    name: User?.user_metadata.full_name,
    avatar: User?.user_metadata.avatar_url,
  }

  const [minData, setMinData] = useState('')
  const [destinyData, setDestinyData] = useState('')
  const [originData, setOriginData] = useState('')
  const [cellPhonePlanData, setCellPhonePlanData] = useState('')
  const [priceWithOutPlan, setPriceWithOutPlan] = useState('')
  const [priceWithPlan, setPriceWithPlan] = useState('')

  const minutes = parseInt(minData)
  const minutesDiscount = parseInt(cellPhonePlanData)

  async function getPlanPrices() {
    const { data: ComFaleMais } = await supabase
      .from('FaleMais')
      .select('pricePerMinute')
      .match({ 'destiny': `${destinyData}`, 'origin': `${originData}` })
      .single()
    let { pricePerMinute } = ComFaleMais
    const min = (minutes - minutesDiscount)
    if (min < 0) {
      setPriceWithPlan("0.00");
    } else {
      setPriceWithPlan((min * (pricePerMinute * 1.1)).toFixed(2))
    }
  }

  async function getDefaultPrices() {
    const { data: SemFaleMais } = await supabase
      .from('FaleMais')
      .select('pricePerMinute')
      .match({ 'destiny': `${destinyData}`, 'origin': `${originData}` })
      .single()
    let { pricePerMinute } = SemFaleMais
    setPriceWithOutPlan((pricePerMinute * minutes).toFixed(2))
  }
  async function getData() {

    if (destinyData === '' || originData === '' || minData === '' || cellPhonePlanData === '') {
      alert('Por Favor Inserir os dados corretamente')
    } else if (destinyData === originData) {
      alert('Por Favor Informar DDDs Diferentes')
    } else {
      await getDefaultPrices()
      await getPlanPrices()
    }
  }



  const minInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinData(e.target.value)
  }


  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logoWhiteImg} alt='logo' />
        </NavLink>
        <NavMenu>
        </NavMenu>
        {session ? ( <NavBtn>
          <ProfileImg src={user.avatar}></ProfileImg>
          <span>{user.name}</span>
          <NavBtnLink onClick={logout} to='/' >Sair</NavBtnLink>
        </NavBtn>): ( 
          <NavBtn>
            <NavBtnLink to='/'> Faça o login</NavBtnLink>
          </NavBtn>
        )}
        
      </Nav>
      <MainApp>
      {session ? (
        <InputSection>
          <section>
            <h3>Vamos fazer uma simulação?</h3>
          </section>
          <section>
            <div>
              <p>DDD de Origem</p>
              <select value={originData} onChange={(e) => setOriginData(e.target.value)}>
                <option value="" selected disabled hidden >DDD</option>
                <option value="11">11</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
              </select>
            </div>
            <div>
              <p>DDD de Destino</p>
              <select value={destinyData} onChange={(e) => setDestinyData(e.target.value)}>
                <option value="" selected disabled hidden >DDD</option>
                <option value="11">11</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
              </select>
            </div>
          </section>
          <section>
            <span>Tempo</span>
          </section>
          <section>
            <input placeholder="Quantos minutos você ira falar?" type="number" name="time" id="time" min='0' onChange={minInput} />
          </section>
          <section>
            <span>Escolha aqui o seu plano</span>
          </section>
          <section className="radioSection">
            <InpRadio name="FaleMais" id="FaleMais30" value="30" onChange={(e) => setCellPhonePlanData(e.target.value)} />
            <span>FaleMais30</span>
            <InpRadio name="FaleMais" id="FaleMais60" value="60" onChange={(e) => setCellPhonePlanData(e.target.value)} />
            <span>FaleMais60</span>
            <InpRadio name="FaleMais" id="FaleMais120" value="120" onChange={(e) => setCellPhonePlanData(e.target.value)} />
            <span>FaleMais120</span>
          </section>
          <SubmitButton onClick={getData}>Enviar</SubmitButton>
        </InputSection>
      ): (
        <SimulatorSection>
          <div>
          <h3> Você precisa estar logado para fazer a simulação</h3>
          <SubmitButton onClick={verifySession}>Faça o Login</SubmitButton>
          </div>
        </SimulatorSection>
      )}
        {priceWithOutPlan ? (
          <><SimulatorSection>
            <div>
              <h2><span className='h2Red'>Sem</span> FaleMais</h2>
              <h3>Sua Ligação custará:</h3>
              <h1 className='priceWithOutPlan'><span>R$</span>{priceWithOutPlan}</h1>
            </div>
          </SimulatorSection><SimulatorSection>
              <div>
                <h2><span className='h2Yellow'>Com</span> FaleMais</h2>
                <h3>Sua Ligação custará:</h3>
                <h1 className='priceWithPlan'><span>R$</span>{priceWithPlan}</h1>
              </div>
            </SimulatorSection></>
        ) : (
          null
        )}
      </MainApp>




    </>
  );
};
