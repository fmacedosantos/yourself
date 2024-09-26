import "../Cadastro/RegisterForm";
const styles = {
  // Register
  register: {
    position: 'relative',
    width: '390px',
    height: '844px',
    background: '#373435',
    borderRadius: '8px',
  },

  // Login
  login: {
    position: 'absolute',
    width: '47px',
    height: '24px',
    left: '172px',
    top: '771px',
    fontFamily: 'Itim',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '24px',
    color: '#FFB636',
  },

  // register-button
  registerButton: {
    position: 'absolute',
    width: '293px',
    height: '46px',
    left: '49px',
    top: '696px',
  },

  // Rectangle 517
  rectangle517: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '293px',
    height: '46px',
    left: '49px',
    top: '696px',
    background: '#373435',
    border: '2px solid #FFB636',
    borderRadius: '13px',
  },

  // Cadastrar
  cadastrar: {
    position: 'absolute',
    width: '88px',
    height: '24px',
    left: '151px',
    top: '707px',
    fontFamily: 'Itim',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '24px',
    color: '#FFB636',
  },

  // form-fields
  formFields: {
    position: 'absolute',
    width: '294px',
    height: '435px',
    left: '48px',
    top: '204px',
  },

  // name-input
  nameInput: {
    position: 'absolute',
    width: '293px',
    height: '79px',
    left: '49px',
    top: '293px',
  },

  // Rectangle 512
  rectangle512: {
    position: 'absolute',
    width: '293px',
    height: '46px',
    left: '49px',
    top: '326px',
    background: '#FFFDFD',
    borderRadius: '13px',
  },

  // Nome
  nome: {
    position: 'absolute',
    width: '51px',
    height: '28px',
    left: '49px',
    top: '293px',
    fontFamily: 'Itim',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '24px',
    color: '#FDFDFD',
  },

  // Nome completo
  nomeCompleto: {
    position: 'absolute',
    width: '135px',
    height: '28px',
    left: '63px',
    top: '335px',
    fontFamily: 'Itim',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '24px',
    color: 'rgba(55, 52, 53, 0.7)',
  },

  // email-input
  emailInput: {
    position: 'absolute',
    width: '293px',
    height: '79px',
    left: '49px',
    top: '204px',
  },

  // Rectangle 512
  emailRectangle512: {
    position: 'absolute',
    width: '293px',
    height: '46px',
    left: '49px',
    top: '237px',
    background: '#FFFDFD',
    borderRadius: '13px',
  },

  // Email
  email: {
    position: 'absolute',
    width: '50px',
    height: '28px',
    left: '49px',
    top: '204px',
    fontFamily: 'Itim',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '24px',
    color: '#FDFDFD',
  },

  // seu@email.com
  emailPlaceholder: {
    position: 'absolute',
    width: '132px',
    height: '28px',
    left: '63px',
    top: '246px',
    fontFamily: 'Itim',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '24px',
    color: 'rgba(55, 52, 53, 0.7)',
  },

  // username-input
  usernameInput: {
    position: 'absolute',
    width: '293px',
    height: '79px',
    left: '48px',
    top: '382px',
  },

  // Rectangle 512
  usernameRectangle512: {
    position: 'absolute',
    width: '293px',
    height: '46px',
    left: '48px',
    top: '415px',
    background: '#FFFDFD',
    borderRadius: '13px',
  },

  // Nome de usuário
  nomeDeUsuario: {
    position: 'absolute',
    width: '145px',
    height: '28px',
    left: '48px',
    top: '382px',
    fontFamily: 'Itim',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '24px',
    color: '#FDFDFD',
  },

  // nome de usuário
  nomeDeUsuarioPlaceholder: {
    position: 'absolute',
    width: '142px',
    height: '28px',
    left: '62px',
    top: '424px',
    fontFamily: 'Itim',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '24px',
    color: 'rgba(55, 52, 53, 0.7)',
  },

  // password-input
  passwordInput: {
    position: 'absolute',
    width: '293px',
    height: '79px',
    left: '48px',
    top: '471px',
  },

  // Rectangle 512
  passwordRectangle512: {
    position: 'absolute',
    width: '293px',
    height: '46px',
    left: '48px',
    top: '504px',
    background: '#FFFDFD',
    borderRadius: '13px',
  },

  // Senha
  senha: {
    position: 'absolute',
    width: '59px',
    height: '28px',
    left: '48px',
    top: '471px',
    fontFamily: 'Itim',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '24px',
    color: '#FDFDFD',
  },

  // senha
  senhaPlaceholder: {
    position: 'absolute',
    width: '50px',
    height: '28px',
    left: '62px',
    top: '513px',
    fontFamily: 'Itim',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '24px',
    color: 'rgba(55, 52, 53, 0.7)',
  },

  // repeat_password-input
  repeatPasswordInput: {
    position: 'absolute',
    width: '293px',
    height: '79px',
    left: '48px',
    top: '560px',
  },

  // Rectangle 512
  repeatPasswordRectangle512: {
    position: 'absolute',
    width: '293px',
    height: '46px',
    left: '48px',
    top: '593px',
    background: '#FFFDFD',
    borderRadius: '13px',
  },

  // Confirmar senha
  confirmaSenha: {
    position: 'absolute',
    width: '147px',
    height: '28px',
    left: '48px',
    top: '560px',
    fontFamily: 'Itim',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '24px',
    color: '#FDFDFD',
  },

  // repita a senha
  repitaASenha: {
    position: 'absolute',
    width: '121px',
    height: '28px',
    left: '62px',
    top: '602px',
    fontFamily: 'Itim',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '24px',
    color: 'rgba(55, 52, 53, 0.7)',
  },

  // yourself-title
  yourselfTitle: {
    position: 'absolute',
    width: '239px',
    height: '70px',
    left: '76px',
    top: '76px',
  },

  // Y urself
  yUrself: {
    position: 'absolute',
    width: '239px',
    height: '70px',
    left: '76px',
    top: '76px',
    fontFamily: 'Itim',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '64px',
    lineHeight: '77px',
    color: '#FDFDFD',
  },

  // fire-icon
  fireIcon: {
    position: 'absolute',
    width: '38px',
    height: '39px',
    left: '103px',
    top: '99px',
  },

  // Vector
  vector1: {
    position: 'absolute',
    left: '13.46%',
    right: '8.82%',
    top: '2.36%',
    bottom: '2.26%',
    background: '#FF8F1F',
  },

  // Vector
  vector2: {
    position: 'absolute',
    left: '6.98%',
    right: '22.92%',
    top: '16.86%',
    bottom: '2.26%',
    background: '#FFB636',
  },

  // Vector
  vector3: {
    position: 'absolute',
    left: '61.03%',
    right: '36.6%',
    top: '67.57%',
    bottom: '26.38%',
    background: '#FFD469',
  },
};