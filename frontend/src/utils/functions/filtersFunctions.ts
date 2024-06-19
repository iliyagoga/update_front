
class filtersFunctions{
    filter(value: string, data: any[]){
        let arr=Object.assign(data)
        let r=arr.filter(v=>{
            if(v.themes.includes(value)){
                return v
            }
        })
        return r
    }
}

export default filtersFunctions