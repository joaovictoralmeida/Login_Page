import styles from '../components/LayoutR.module.css'
import { FcGoogle } from "react-icons/fc";
import Input from './Input'

const LayoutR = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.layoutc}>

          <div className={styles.title}>
            <p>Bem-vindo de volta</p>
            <h1>Faça login na sua conta</h1>
          </div>

          <div className={styles.form}>
            <div className={styles.inputs}>
              <Input
              type="email"
              placeholder="exemplo@gmail.com"
              label="E-Mail"
              />

              <Input
              type="password"
              placeholder="0123456789"
              label="Senha"
              />

              <div className={styles.remember}>
                <div>
                  <input type="checkbox" name="checkbox" id="check"/>
                  <label htmlFor="check">Lembre de mim</label>
                </div>

                <div>
                  <a href="#">Esqueceu sua senha?</a>
                </div>
              </div>

              <div className={styles.buttons}>
                  <button className={styles.button1}>Entrar na Conta</button>
                  <button className={styles.button2}><FcGoogle />Ou faça login com o Google</button>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className={styles.signup}>
          <p>Não tem uma conta? <a href="#">Cadastre-se</a></p>
        </div>
    </div>
  )
}

export default LayoutR