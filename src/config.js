export default {
    data() {
        var ingressServer = "http://fist.lameleg.com:32024/"
        return {
            fistRBACServerLogin: ingressServer + "login",
            fistRBACServerSignup: ingressServer + "signup",
            fistTerminalServer: ingressServer + "terminal",
            fistAuthServerToken: ingressServer + "token"
        }
    }
}