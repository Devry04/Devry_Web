import './Login.css';

import { Button, Form, FormGroup, Label, Input }
  from 'reactstrap';

function Login() {
  return (
    <form className="login">
      <h2>
        <span className="font-weight-bold">Selamat Datang Kamu,</span>
      </h2>
      <h2><strong>Yuk Masuk!</strong></h2>

      <FormGroup>
        <label>Email/Username</label>
        <div></div>
        <Input type="email/username" placeholder="Input Email/Username" />
      </FormGroup>

      <FormGroup>
        <label>Password</label>
        <div></div>
        <Input type="password" placeholder="Input Password" />
      </FormGroup>
      <div className="text-right">
        <a href="">Lupa Password?</a>
      </div>
      <div className="text-center">
        <button type="button" class="btn1">Masuk</button>
        <p></p>
        <p>Kamu Belum Gabung?</p>
        <button type="button" class="btn2">Daftar</button>
      </div>
    </form>
  );
}

export default Login;
