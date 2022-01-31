import React from 'react';

class Conditional extends React.Component {
    state = {
         isLoading : true
    }
    render (){
        setTimeout (()=>{
            this.setState({
                isLoading : false
            })
        }, 10000)
        return (
            <div>
                {this.state.isLoading 
                ? <h1>Loading...</h1>
                : <h1>Anda Berhasil Login</h1>}
            </div>
        )
        // let message= '';
        // if(isLogin){
        //     message='Anda Berhasil Login';
        // }else {
        //     message ='Silahkan Login terlebih dahulu';
        // }
        // if(isLogin){
        //     return (
        //         <div>
        //             anda sudah Login
        //         </div>
        // )
        // } else {
        //     return (
        //         <div>Silahkan Login terlebih dahulu</div>
        //     )
        // }

        // return(
        //     <div><h1>{message}</h1></div>
        // )

        // return (
        //     <div>
        //         {isLogin ?<h1> Anda suda Login</h1> : <h1>Silahkan login terlebih dahulu</h1>}
        //     </div>
        // )
    }
}

export default Conditional;