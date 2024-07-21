import LocalizedStrings from 'react-native-localization';

const languages = new LocalizedStrings({
  en: {
    login: 'Login',
    emailLabel: 'Email',
    passwordLabel: 'Password',
    googleLoginText: 'Login with Google',
  },

  it: {
    login: 'Come vuoi il tuo uovo oggi?',
    emailLabel: 'Uovo sodo',
    passwordLabel: 'Uovo alla coque',
    googleLoginText: "Come scegliere l'uovo",
  },
});

export default languages;
