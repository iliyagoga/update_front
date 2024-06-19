
const createThemes= (data: any)=>{
    let ts: string[]=[];
    data.map(v=>{
        v.themes.map((p: string)=>{
            ts.push(p);
        })
    })
    let arr=  [...new Set(ts)];
    return arr;

}
export default createThemes