import React, { Component } from 'react'
import { Segment, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { buscaVideo } from '../store/actions/buscaVideo'

class SearchBar extends Component {

    constructor(props) {
        super(props)

        // ao carregar o componente já busca algum conteúdo
        this.props.buscaVideo('React and Redux')
    }

    pesquisaTermo = e => {
        // captura o valor digitado no input
        if (e.keyCode === 13) {
            const termo = e.target.value
            console.log(termo)
            this.props.buscaVideo(termo)
        }
    }

    render() {
        return (

            <div className="search-bar">
                <Segment stacked>
                    <Input icon='search' onKeyDown={(e) => this.pesquisaTermo(e)} size='large' placeholder='Search...' />
                </Segment>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buscaVideo: (termo) => dispatch(buscaVideo(termo))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar);