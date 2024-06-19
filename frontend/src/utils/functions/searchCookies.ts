const seacrhCookies = (cookie: string)=>{
    const cookee= document.cookie.split(';')
    let res: any = cookee.filter(v=>{
        if(v.split('=')[0]==cookie){
            return v
        }
    })
    if(res.length==0){
        return 0
    }
    if(res[0].split('=')[1].length==0)
        return 0
    
    return JSON.parse(res[0].split('=')[1])
}

export default seacrhCookies