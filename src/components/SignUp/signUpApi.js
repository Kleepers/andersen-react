// A mock function to mimic making an async request to singup a user
export function signUpApi(data) {
    const isPasswordValid = data.password.length > 6 && data.password;
    const isEmailValid = data.email.length > 6 && data.email;
    return new Promise((resolve,reject) => {

        if(!isEmailValid || !isPasswordValid) {
            reject(new Error('Wrong data'))
        } else if (localStorage.getItem(data.email)) {
            reject(new Error('User with such email already exists'))
        }
        localStorage.setItem(data.email, data.password)
        setTimeout(() => resolve({token: '123'}), 2000)
    })
}
