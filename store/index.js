import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            navHome: true,
            navLogin: false,
        },
        getters: {
            getNavHomeState(state) {
                return state.navHome
            },
            getNavLoginState(state) {
                return state.navLogin
            }
        },
        mutations: {
            SET_NAV_HOME(state, value) {
                state.navHome = value
            },
            SET_NAV_LOGIN(state, value) {
                state.navLogin = value
            }
        },
        actions: {
            defaultHome({ commit }) {
                if ($nuxt.$auth.loggedIn) {
                    commit('SET_NAV_HOME', false)
                    commit('SET_NAV_LOGIN', true)
                }
                else {
                    commit('SET_NAV_HOME', true)
                    commit('SET_NAV_LOGIN', false)
                }

            },
        }
    })
}

export default createStore