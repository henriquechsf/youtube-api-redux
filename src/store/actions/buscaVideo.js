import youtubeSearch from 'youtube-api-v3-search'
import YTApi from '../../services/apiYoutube'
import API_kEY from '../../services/apiYoutube'

const API_KEY = YTApi

// buscaVideo
// inicia busca
//  retorne a lista de video
//  retorne o erro

export const buscaVideoInicio = () => {
    return {
        type: 'BUSCA_VIDEO_INICIO',
        carregando: true,
        erro: false
    }
}

// em caso de sucesso o Youtube vai retornar uma lista de videos
export const buscaVideoSucesso = (videos) => {
    return {
        type: 'BUSCA_VIDEO_SUCESSO',
        videos,
        carregando: false,
        erro: false
    }
}

export const buscaVideoErro = () => {
    return {
        type: 'BUSCA_VIDEO_ERRO',
        carregando: false,
        erro: true
    }
}

// action assincrona - busca na API
export const buscaVideo = (termo) => {
    return dispatch => {
        dispatch(buscaVideoInicio())
        // api youtube deve receber estes 2 parametros
        // promise que vai retornar uma lista de videos relacionados com o termo
        youtubeSearch(API_kEY, { q: termo })
            .then((data) => dispatch(buscaVideoSucesso(data.items)))
            .catch(() => dispatch(buscaVideoErro))
    }
}