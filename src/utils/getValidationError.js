export const getValidationError = errorCode => {
  const codeMatcher = {
    ERR_NETWORK: 'Estamos teniendo problemas para conectarnos con nuestros servidores por favor vuelve a intentarlo más tarde',
    ERR_TIMEOUT: 'Se acabó el tiempo',
    ERR_CANCEL: 'Se canceló la petición',
    ERR_UNKNOWN: 'Error desconocido',
    ERR_400: 'Error 400',
    ERR_401: 'Error 401',
    ERR_403: 'Error 403',
    ERR_BAD_RESPONSE: 'Algo salió mal, revisa la información enviada por favor',
    'auth/user-not-found': 'Usuario no registrado',
    'auth/internal-error': 'error interno',
    'auth/wrong-password': 'Contraseña Incorrecta',
    'auth/too-many-requests': 'Demasiados intentos fallidos para esta cuenta, intentelo mas tarde',
  };

  return codeMatcher[errorCode];
};
