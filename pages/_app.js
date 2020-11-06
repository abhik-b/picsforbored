import '../styles/globals.css'
import {useState} from 'react'
function MyApp({ Component, pageProps }) {
  const [history, sethistory] = useState({})
  const [call, setCall] = useState(false)
  const [source, setsource] = useState('memes')
  return <Component {...pageProps}
  call={call}
  setCall={(value)=>setCall(value)}
  history={history}  
  source={source}  
  setHistory={newH=>{
    sethistory(newH)
    console.log(history)
  }}
  setSource={newS=>{
    setsource(newS)
    console.log(newS,source)
    }}
  />
}

export default MyApp
