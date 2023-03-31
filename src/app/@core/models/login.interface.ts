export interface FormLogin {
  username: string;
  password: string;
  captcha: string;
  type: 'families' | 'partners' | '';
}
