import React, { Component } from 'react'
import { connect } from 'react-redux'

import { List, Image } from 'semantic-ui-react'

class VideoList extends Component {

    renderVideo(video) {
        return (
            <List animated verticalAlign="middle">
                <List.Item>
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
                {
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