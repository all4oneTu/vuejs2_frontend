import { message } from 'ant-design-vue/es'
// import defaultSettings from '../defaultSettings';

let lessNodesAppended

const colorList = [
  {
    key: '#F5222D', color: '#F5222D'
  },
  {
    key: '#FA541C', color: '#FA541C'
  },
  {
    key: '#FAAD14', color: '#FAAD14'
  },
  {
    key: '#13C2C2', color: '#13C2C2'
  },
  {
    key: '#52C41A', color: '#52C41A'
  },
  {
    key: '#1890FF', color: '#1890FF'
  },
  {
    key: '#2F54EB', color: '#2F54EB'
  },
  {
    key: '#722ED1', color: '#722ED1'
  }
]

const updateTheme = primaryColor => {
  // Don't compile less in production!
  /* if (process.env.NODE_ENV === 'production') {
    return;
  } */
  // Determine if the component is remounted
  if (!primaryColor) {
    return
  }
  const hideMessage = message.loading('Biên soạn chủ đề！', 0)
  function buildIt () {
    if (!window.less) {
      return
    }
    setTimeout(() => {
      window.less
        .modifyVars({
          '@primary-color': primaryColor
        })
        .then(() => {
          hideMessage()
        })
        .catch(() => {
          message.error('Failed to update theme')
          hideMessage()
        })
    }, 200)
  }
  if (!lessNodesAppended) {
    // insert less.js and color.less
    const lessStyleNode = document.createElement('link')
    const lessConfigNode = document.createElement('script')
    const lessScriptNode = document.createElement('script')
    lessStyleNode.setAttribute('rel', 'stylesheet/less')
    lessStyleNode.setAttribute('href', '/color.less')
    lessConfigNode.innerHTML = `
      window.less = {
        async: true,
        env: 'production',
        javascriptEnabled: true
      };
    `
    lessScriptNode.src = 'https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js'
    lessScriptNode.async = true
    lessScriptNode.onload = () => {
      buildIt()
      lessScriptNode.onload = null
    }
    document.body.appendChild(lessStyleNode)
    document.body.appendChild(lessConfigNode)
    document.body.appendChild(lessScriptNode)
    lessNodesAppended = true
  } else {
    buildIt()
  }
}

const updateColorWeak = colorWeak => {
  // document.body.className = colorWeak ? 'colorWeak' : '';
  colorWeak ? document.body.classList.add('colorWeak') : document.body.classList.remove('colorWeak')
}

export { updateTheme, colorList, updateColorWeak }
