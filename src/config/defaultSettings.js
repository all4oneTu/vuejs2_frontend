export default {
    primaryColor: '#1890FF', // primary color of ant design
    navTheme: 'dark', // theme for nav menu
    layout: 'topmenu', // nav menu position: sidemenu or topmenu
    contentWidth: 'Fixed', // layout of content: Fluid or Fixed, only works when layout is topmenu
    fixedHeader: true, // sticky header
    fixSiderbar: false, // sticky siderbar
    autoHideHeader: false, //  auto hide header
    colorWeak: false,
    multiTab: false,
    production: process.env.NODE_ENV === 'production' && process.env.VUE_APP_PREVIEW !== 'true',
    storageOptions: {
      namespace: 'pro__', // key prefix
      name: 'ls', // name variable Vue.[ls] or this.[$ls],
      storage: 'local' // storage name session, local, memory
    }
  }