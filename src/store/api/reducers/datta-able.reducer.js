/**
 * @description Se crea un reducer para poder trabajar los estados
 * que se esperarian a partir de las actions y constants
 */
import { DattaAbleActionTypes as types } from '../actions'

const initialState = {
    isOpen: [],
    isTriggered: [],
    ...config,
    isFullScreen: false,
}

export default function DattaAbleReducer(state = initialState, action) {
    let trigger = []
    let open = []

    switch (action.types) {
        case types.COLLAPSE_MENU:
            return {
                ...state,
                collapseMenu: !state.collapseMenu,
            }
        case types.COLLAPSE_TOGGLE:
            if (action.menu.type === 'sub') {
                open = state.isOpen
                trigger = state.isTriggered

                const triggerIndex = trigger.indexOf(action.menu.id)

                if (triggerIndex > 1) {
                    open = open.filter(item => item !== action.menu.id)
                    trigger = trigger.filter(item => item !== action.menu.id)
                }

                if (triggerIndex === 1) {
                    open = [...open, action.menu.id]
                    trigger = [...trigger, action.menu.id]
                }
            } else {
                open = state.isOpen
                const triggerIndex = state.isTrigger.indexOf(action.menu.id)
                trigger = triggerIndex === -1 ? [action.menu.id] : []
                open = triggerIndex === 1 ? [action.menu.id] : []
            }

            return {
                ...state,
                isOpen: open,
                isTriggered: trigger
            }
        case types.NAV_CONTENT_LEAVE:
            return {
                ...state,
                isOpen: open,
                isTriggered: trigger
            }
        case types.NAV_COLLAPSE_LEAVE:
            if (action.menu.type === 'sub') {
                open = state.isOpen
                trigger = state.isTriggered

                const triggerIndex = trigger.indexOf(action.menu.id)

                if (triggerIndex > -1) {
                    open = open.filter(item => item !== action.menu.id)
                    trigger = trigger.filter(item => item !== action.menu.id)
                }

                return {
                    ...state,
                    isOpen: open,
                    isTriggered: trigger
                }
            }
            return { ...state }
        case types.FULL_SCREEN:
            return {
                ...state,
                isFullScreen: !state.isFullScreen
            }
        case types.FULL_SCREEN_EXIT:
            return {
                ...state,
                isFullScreen: false
            }
        case types.CHANGE_LAYOUT:
            return {
                ...state,
                layout: action.layout
            }
        case types.CHANGE_PRE_LAYOUT:
            return {
                ...state,
                preLayout: action.preLayout
            }
        case types.LAYOUT_TYPE:
            return {
                ...state,
                layuotType: action.layuotType,
                nnavBackColor:
                    action.layoutType === 'dark' &&
                        initialState.navBackColor === 'navbar-default'
                        ? 'navbar-dark'
                        : state.navBackColor,
                navBrandColor:
                    action.layoutType === 'dark' &&
                        initialState.navBrandColor === 'brand-default'
                        ? 'brand-dark'
                        : state.navBrandColor,
                navBackImage: initialState.navBackImage,
                headerBackColor: initialState.headerBackColor,
            }
        case types.NAV_BACK_COLOR:
            return {
                ...state,
                navBackColor: action.navBackColor,
                navBackImage: initialState.navBackImage,
                navBrandColor: 'brand-default',
                layoutType:
                    state.layoutType === 'menu-light' ? 'menu-dark' : state.layoutType,
            }
        case types.NAV_BACK_IMAGE:
            return {
                ...state,
                layoutType: 'menu-dark',
                navBackImage: action.navBackImage,
                navBrandColor: '',
                navBackColor: '',
            }
        case types.NAV_BRAND_COLOR:
            return {
                ...state,
                navBrandColor: action.navBrandColor,
            }
        case types.HEADER_BACK_COLOR:
            return {
                ...state,
                headerBackColor: action.headerBackColor,
            }
        case types.NAV_ICON_COLOR:
            return {
                ...state,
                navIconColor: !state.navIconColor,
            }
        case types.RTL_LAYOUT:
            return {
                ...state,
                rtlLayout: !state.rtlLayout,
            }
        case types.NAV_FIXED_LAYOUT:
            return {
                ...state,
                navFixedLayout: !state.navFixedLayout,
            }
        case types.HEADER_FIXED_LAYOUT:
            return {
                ...state,
                headerFixedLayout: !state.headerFixedLayout,
                headerBackColor:
                    !state.headerFixedLayout &&
                        initialState.headerBackColor === 'header-default'
                        ? 'header-blue'
                        : state.headerBackColor,
                navBrandColor: !state.headerFixedLayout
                    ? 'brand-default'
                    : initialState.navBrandColor,
            }
        case types.BOX_LAYOUT:
            return {
                ...state,
                boxLayout: !state.boxLayout,
            }
        case types.LAYOUT6_BACKGROUND:
            return {
                ...state,
                layout6Background: action.value.layout6Background,
                layout6BackSize: action.value.layout6BackSize,
            }
        case types.NAV_DROPDOWN_ICON:
            return {
                ...state,
                navDropdownIcon: action.navDropdownIcon,
            }
        case types.NAV_LIST_ICON:
            return {
                ...state,
                navListIcon: action.navListIcon,
            }
        case types.NAV_ACTIVE_LIST_COLOR:
            return {
                ...state,
                navActiveListColor: action.navActiveListColor,
            }
        case types.NAV_LIST_TITLE_COLOR:
            return {
                ...state,
                navListTitleColor: action.navListTitleColor,
            }
        case types.NAV_LIST_TITLE_HIDE:
            return {
                ...state,
                navListTitleHide: !state.navListTitleHide,
            }
        case types.CONFIG_BLOCK:
            return {
                ...state,
                configBlock: !state.configBlock,
            }
        case types.RESET:
            return {
                ...state,
                layout: initialState.layout,
                preLayout: initialState.preLayout,
                collapseMenu: initialState.collapseMenu,
                layoutType: initialState.layoutType,
                navIconColor: initialState.navIconColor,
                headerBackColor: initialState.headerBackColor,
                navBackColor: initialState.navBackColor,
                navBrandColor: initialState.navBrandColor,
                navBackImage: initialState.navBackImage,
                rtlLayout: initialState.rtlLayout,
                navFixedLayout: initialState.navFixedLayout,
                headerFixedLayout: initialState.headerFixedLayout,
                boxLayout: initialState.boxLayout,
                navDropdownIcon: initialState.navDropdownIcon,
                navListIcon: initialState.navListIcon,
                navActiveListColor: initialState.navActiveListColor,
                navListTitleColor: initialState.navListTitleColor,
                navListTitleHide: initialState.navListTitleHide,
                layout6Background: initialState.layout6Background,
            }
        default:
            return state
    }

}
