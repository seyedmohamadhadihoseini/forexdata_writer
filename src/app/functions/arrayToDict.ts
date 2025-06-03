
export default function ArryaToDict(dataArray:{name:string,value:string}[]){
    
    const initialValue: { [x: string]: string } = {};
    const data = dataArray.reduce((acc, curr) => {
        const name = curr.name;
        return {
            [name]: curr.value, ...acc
        }
    }, initialValue);

    return data;
}