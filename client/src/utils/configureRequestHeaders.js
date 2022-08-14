export const configureRequestHeaders = (accesstoken, data) => {
    if(data){
        return {
            headers: {
                'authorization': `Bearer ${accesstoken}`
            },
            data
        }
    }else {
        return{
            headers: {
                'authorization': `Bearer ${accesstoken}`
            }
        }
    }
}
