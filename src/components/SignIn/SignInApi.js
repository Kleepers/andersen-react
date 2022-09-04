// A mock function to mimic making an async request to singin a user
export function signInApi (data) {
    const isPasswordValid = data.password.length > 6 && data.password;
    const isEmailValid = data.email.length > 6 && data.email;

    return new Promise((resolve,reject) => {

        if (!isEmailValid || !isPasswordValid) {
            reject(new Error('Wrong data'))
        }
        if (!localStorage.getItem(data.email)) {
            reject(new Error('User with such email doesnt exist'))
        }
        if (localStorage.getItem(data.email) !== data.password) {
            setTimeout(() => resolve({token: '123'}), 2000)
        }
    })
}
