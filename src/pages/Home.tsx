import illustrationImg from '../assets/images/call-img.svg'
import logoBlueImg from '../assets/images/telzir-blue.png'
import googleIconImg from '../assets/images/google-logo.svg'
import facebookIconImg from '../assets/images/facebook-logo.svg'

import {GoogleBtn, FacebookBtn} from '../components/Buttons'
import {PageAuth, Aside, Main} from '../styles/Home-styles'
import {useNavigate} from 'react-router-dom'
import '../styles/global.css';

import {signInWithGoogle, signInWithFacebook, supabase} from '../services/supabaseClient'



export function Home() {
  const session = supabase.auth.session()
  const navigate = useNavigate()


async function loginInWithGoogle(){
  if(!session){
    await signInWithGoogle() 
  }
  navigate("/app")
}

async function loginInWithFacebook(){
   if(!session){
    await signInWithFacebook() 
  }
 navigate("/app")
}
  return (
    <PageAuth>
      <Aside>
        <img src={illustrationImg} alt="" />
        <span>Com Você</span>
        <strong>Para Você</strong>
      </Aside>
      <Main>
      <div className="main-content">
              <img className="logo" src={logoBlueImg} alt="Telzir" />
              <GoogleBtn onClick={loginInWithGoogle}>
                  <img src={googleIconImg} alt="Logo da Google" />
                  Faça login com o Google
              </GoogleBtn>
              <FacebookBtn onClick={loginInWithFacebook}>
                  <img src={facebookIconImg} alt="Logo da Google" />
                  Faça login com o Facebook
              </FacebookBtn>
      </div>
      </Main>
    </PageAuth>
  );
}