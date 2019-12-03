function createRes(error,data)
{
    const result={}
    if(error){
        result['status']='error'
        result['error']=eroor

    }
    else{
        result['status']='success'
        result['data']=data
    }
    return result

}
module.exports={
    createRes:createRes
}