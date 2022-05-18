export const authConfig = (auth) => ({
    authorisated: {
        profile: {
            path: "/profile",
            content: `${auth?.user?.firstName} ${auth?.user?.lastName}`
        },
        logOut: {
            content: "Log Out"
        },
    },
    unAuthorisated: {
       login: {
           path: "/login",
           content: 'Login'
       },
        register: {
            path: "/registration",
            content: 'Registration'
        }
    },
    home: {
        path: '/',
        content: 'Home'
    }
})
