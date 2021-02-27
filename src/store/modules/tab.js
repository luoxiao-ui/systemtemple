import '@/utils/init.js'
import router from '../../router/index'
const tab = {
    state: {
        tabs: getTabs()
    },
    mutations: {
        ADD_TAB: (state, tab)=> {
            let a = state.tabs.find(v=> {
                if(v.name === tab.name){
                    return true
                }
            })
            if(a){
                return
            }else if(tab.meta.tabindex === 1){
                let tabs = {
                    name: tab.name,
                    meta: tab.meta
                }
                state.tabs.splice(0, 1, tabs)
                setTabs(state)
            }else {
                let tabs = {
                    name: tab.name,
                    meta: tab.meta
                }
                state.tabs.push(tabs)
                setTabs(state)
            }
        },
        CLOSE_TAB: (state, tab)=> {
            let a = state.tabs.findIndex(v=> {
                if(v.name === tab.name){
                    return true
                }
            })
            state.tabs.splice(a, 1)
            if(tab.fontname === tab.name){
                router.replace({
                    name: state.tabs[a-1].name
                })
            }
            setTabs(state)
        }
    },
    actions: {
        AddTab({commit}, tab) {
            commit('ADD_TAB', tab)
        },
        CloseTab({commit}, tab){
            commit('CLOSE_TAB', tab)
        }
    }
}

function getTabs() {
    let a = CK.getCookie('tablist')
    if(!a) {
        return [{name: 'Homeindex', meta: {title: '首页'}}]
    }else {
        return a
    }
}

function setTabs(state){
    CK.setCookie('tablist', state.tabs)
}

export default tab