import { useCallback } from './index'

type Callback = (p:any)=>void

function listen(key:string,callback:Callback){
    const [on,setOn] = useCallback('on')
    const i = on.findIndex(v=>v.key === key)
    if(i>-1){
        on[i].callback = callback
    }else{
        on.push({
            key,
            callback
        })
    }
    setOn(on)
}

function emit(key:string,payload:any){
    const [on] = useCallback('on')
    const i = on.findIndex(v=>v.key === key)
    if(i>-1){
        on[i].callback(payload)
    }
}

export default {
    on:listen,
    emit
}