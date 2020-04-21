import React, { Component } from 'react'
import { connect } from 'react-redux'

// ao clicar no video chamar esta action
import { reproduzVideo } from '../store/actions/reproduzVideo'

import { List, Image, Dimmer, Loader } from 'semantic-ui-react'

class VideoList extends Component {

    renderVideo(video) {
        return (
            <List animated verticalAlign="middle" key={video.etag}>
                <List.Item onClick={() => this.props.reproduz(video)}>
                    <Image src={video.snippet.thumbnails.default.url} />
                    <List.Content>
                        <List.Header>{video.snippet.title}</List.Header>
                    </List.Content>
                </List.Item>
            </List>
        )
    }

    render() {
        return (

            <div className="video-list">

                { /** expressão para mostrar o loading */
                    this.props.carregando && (
                        <Dimmer active>
                            <Loader size="medium">Carregando...</Loader>
                        </Dimmer>
                    )
                }

                { /** loop para listar os videos da pesquisa */
                    this.props.videos.map(video => {
                        console.log("Meu video", video)
                        return this.renderVideo(video)
                    })
                }

                {/**teste 
                <p>{JSON.stringify(this.props)}</p>
                */}
            </div>

        )
    }
}

// dispara a acao de reproduzir o video
const mapDispatchToProps = (dispatch) => {
    return {
        reproduz: (video) => dispatch(reproduzVideo(video))
    }
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
export default connect(mapStateToProps, mapDispatchToProps)(VideoList);