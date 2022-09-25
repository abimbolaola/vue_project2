import VueRouter from 'vue-router';
import AuthHandler from './components/AuthHandler/AuthHandler';
import ImageList from './components/ImageList/ImageList';
import UploadForm from './components/UploadForm/UploadForm';

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/oauth2/callback',
            component: AuthHandler,
        },
        {
            path: '/',
            component: ImageList,
        },
        {
            path: '/upload',
            component: UploadForm,
        },
    ],
});
