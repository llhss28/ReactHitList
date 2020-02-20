


import React from "react"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            targets: [],
            loading: false
        }
    }

    componentDidMount(){
        this.setState({loading: true})
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
        .then(response => response.json())
        .then(data => {
            this.setState({
                loading: false,
                targets: data})
        })
    }


//     componentDidUpdate(prevProps, prevState) {
//        const names = this.state.targets.map(function(item){
//            return item
//        })
// }

    render(){
        const names = this.state.targets.map(function(item){
            return item.name
        })
        const images = this.state.targets.map(function(item){
            return item.image
        })
        console.log(names)
        const text = this.state.loading ? "...loading" : this.state.targets.name
        return(
            <div>

                <header>
                <img src={ require('./don.jpg') }  className = "don"/>
                    Don Corleone's Hit List
                </header>

                <div className= "container">
                    <img src={ require('./pete.jpg') }  className = "pete"/>
                    {names[0]} 
                    <img src={ require('./bunny.jpg') }  className = "bunny"/>
                    {names[1]}
                    <img src={ require('./reb.jpg') }  className = "reb"/>
                    {names[2]}
                </div>
                <div className= "container1">
                    <img src={ require('./six.jpg') }  className = "six"/>
                    {names[3]}
                    <img src={ require('./ewok.jpg') }  className = "ewok"/>
                    {names[4]}
                    <img src={ require('./jabba.jpg') }  className = "jabba"/>
                    {names[5]}
                </div>
                <div className= "container2">
                    <img src={ require('./vege.jpg') }  className = "vege"/>
                    {names[6]}
                    <p>{text}</p>
                </div>


            </div>
        )
    }
}


export default App




