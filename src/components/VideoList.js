import React from 'react'
import { connect } from 'react-redux'

import { List, Image } from 'semantic-ui-react'

const VideoList = props => {
    return (

        <div className="video-list">
            <List animated verticalAlign="middle">
                <List.Item>
                    <Image avatar src='' />
                    <List.Content>
                        <List.Header>Título do Video</List.Header>
                    </List.Content>
                </List.Item>
            </List>

            <p>{JSON.stringify(props)}</p>
        </div>

    )
}

// traz o state da store(global) para o componente
const mapStateToProps = (state) => {
    return {
        videos: state.busca.videos,
        carregando: state.busca.carregando,
        erro: state.busca.erro
    }
}

// connect usado para conectar o component ao redux
// com isso o componente tem acesso ao estado da aplicação
export default connect(mapStateToProps, null)(VideoList);